document.querySelectorAll('.bga-game-item-container [style*=premium]').forEach(x => {
    x.closest('.bga-game-item').parentNode.hidden = 'true'
})
