// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
for(let i=0;i<picture.length;i++){
    picture[i]='*'+picture[i]+'*';
}
picture.unshift('*'.repeat(picture[0].length));
picture.push('*'.repeat(picture[0].length));
return picture;
}
