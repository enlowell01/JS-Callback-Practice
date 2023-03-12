function newImage (pth, lt, bt) {
    let object = document.createElement('img')
    object.src = pth
    object.style.position = 'fixed'
    object.style.left = lt + 'px'
    object.style.bottom = bt + 'px'
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/pillar.png', 350, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/crate.png', 150, 200);

newImage('assets/well.png', 500, 425);

function newItem(pth, lt, bt){
    let object = newImage(pth, lt, bt)
    object.addEventListener('dblclick', () => {
        object.remove()
    })
}


newItem('assets/sword.png', 500, 405);

newItem('assets/shield.png', 165, 185);

newItem('assets/staff.png', 600, 100);
