(function () {
    'use strict';

    var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
    var total = slides.length;
    var current = 0;

    var progress = document.querySelector('.deck-progress');
    var btnPrev = document.querySelector('[data-nav="prev"]');
    var btnNext = document.querySelector('[data-nav="next"]');

    function fragmentsOf(slide) {
        return Array.prototype.slice.call(slide.querySelectorAll('.fragment'));
    }

    function showAllFragments(slide) {
        fragmentsOf(slide).forEach(function (f) { f.classList.add('is-visible'); });
    }

    function hideAllFragments(slide) {
        fragmentsOf(slide).forEach(function (f) { f.classList.remove('is-visible'); });
    }

    function render() {
        slides.forEach(function (slide, i) {
            slide.classList.toggle('is-active', i === current);
        });
        if (progress) {
            progress.style.width = total > 1 ? ((current / (total - 1)) * 100) + '%' : '0%';
        }
        if (btnPrev) btnPrev.disabled = current === 0;
        if (btnNext) btnNext.disabled = current === total - 1;
        history.replaceState(null, '', '#/' + (current + 1));
    }

    function goTo(index, keepFragments) {
        index = Math.max(0, Math.min(total - 1, index));
        if (index === current && slides[index].classList.contains('is-active')) return;
        if (!keepFragments) hideAllFragments(slides[index]);
        current = index;
        render();
    }

    function next() {
        var slide = slides[current];
        var hidden = fragmentsOf(slide).find(function (f) { return !f.classList.contains('is-visible'); });
        if (hidden) { hidden.classList.add('is-visible'); return; }
        if (current < total - 1) goTo(current + 1);
    }

    function prev() {
        var slide = slides[current];
        var revealed = fragmentsOf(slide).slice().reverse().find(function (f) { return f.classList.contains('is-visible'); });
        if (revealed) { revealed.classList.remove('is-visible'); return; }
        if (current > 0) {
            var target = current - 1;
            showAllFragments(slides[target]);
            current = target;
            render();
        }
    }

    function fromHash() {
        var match = location.hash.match(/#\/(\d+)/);
        if (match) {
            var idx = parseInt(match[1], 10) - 1;
            if (!isNaN(idx)) goTo(idx, true);
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
            e.preventDefault();
            next();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            prev();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goTo(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goTo(total - 1);
        }
    });

    if (btnPrev) btnPrev.addEventListener('click', prev);
    if (btnNext) btnNext.addEventListener('click', next);

    var touchStartX = null;
    document.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
        if (touchStartX === null) return;
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
        touchStartX = null;
    }, { passive: true });

    window.addEventListener('hashchange', fromHash);

    fromHash();
    render();
})();
