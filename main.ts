namespace SpriteKind {
    export const slime = SpriteKind.create()
}
namespace StatusBarKind {
    export const fear = StatusBarKind.create()
    export const hunger = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . 8 8 8 8 9 9 9 9 . . . . 
        . . 8 8 8 8 8 8 8 8 8 9 8 8 . . 
        . 8 8 8 6 6 6 8 8 8 8 9 8 8 8 . 
        . 8 8 8 6 8 8 6 8 8 9 9 8 8 8 . 
        8 8 8 6 8 6 8 8 6 6 9 8 8 8 8 8 
        8 8 6 6 6 6 6 6 6 8 9 8 8 8 8 8 
        8 8 6 6 8 8 8 8 6 6 9 6 6 8 8 8 
        8 8 6 8 8 8 8 8 8 9 6 8 6 8 8 8 
        8 8 6 8 8 8 8 8 8 9 6 6 6 8 8 8 
        8 8 8 6 6 6 8 8 8 9 8 8 8 6 6 8 
        8 8 8 8 8 8 6 6 9 9 6 8 8 6 8 8 
        8 8 8 8 8 8 8 8 9 8 8 6 6 6 8 8 
        . 8 8 8 8 8 8 9 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 9 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        `, pink_slime_ship, 0, -50)
    water.setKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    needs_food.value = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.slime, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy(effects.bubbles, 100)
    tarr_afect.value = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let i_dont_know_a_slime: Sprite = null
let cuberry: Sprite = null
let bad_tarr_slime: Sprite = null
let water: Sprite = null
let needs_food: StatusBarSprite = null
let tarr_afect: StatusBarSprite = null
let pink_slime_ship: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66ccc111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb66ccc11c1cccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb6661ccc1cccc1cc1ccccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd9addab6dbd6cccccccccccccccccccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd3aaaaaadbb66ccc6cccccccccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb33aaa9aadacc66cccccccccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb333aa9aaaaaacccccccccccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb333aaaaaaaaaccccccccccbbcbecbbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb333aaaaaaaaaaccccccccbccbccccccbbbbbcccccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb333aa9aaaaaa8aacccc6cbbbbbcccccccccccccbccbbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d33dddaaaaa88acccc6ccbbcbcccccccccbccccbcccbc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd9aaaaa888accccccccccccccbccccccccccccccccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdda9aaaaaaaac6ccccccccccbbdbbebbccccccccccbcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbdddaaaaaaaaaaccc6ccc6ccccdddddddddeccccccccccbccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb3ddaaaaaaaaaaaccacccccccbddddddbdbbddcccccdccbcebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd33333aaaaaaaaaaaccacccccccbdddddbbbbbdbbbccccccbcbbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff3dd3333aa9a9aaaaaaaaaaccccbbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff3d33333aaaa9aaaaaaa8acccccbbdddbbbbdbbbbbbbbbbbcccccccbbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff33333333aaa99aa9aaa88accacbbdddddbbbdbbbbbbbbbbbbcbcccccbcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff33111663aaa9aaa9aad88acaaabddbbbddbbdbbbbbbbbbbbbccccccccbbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff3331911633aa9aaaaaadaaccaacbddbbdbbbbbbbbbbbbbbbbbcccccccccbcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff3331111633aaaaaa111aaaccaacbdddbbbbbbbbbbbbbbbbbbbccccccccccbbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff333113663da9aaaa111aaacccacbddbbbdbbbbbbbbbbbbbbbbcccccccccccbbccc69ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff33333336ddda9aaaa11accccccacddbddbbbbbbbbbbbbbbbbbbcccccccccccccccc66ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff333333369dddaaa9aaaacc6cccccbbbbbbbbbbbbbbbbbbbbbbbbccbccccccccccccc69fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff33333366dddddaa9aaaaccccccccbbbbbbbbbbbbbbbbbbbbbbbcbcc11ccccccccccc69fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff333bb33666ddddaaaaaaaaacccacccbbbbbbbbbbbbbbbbbbbbbbcccc111ccccccccccc9fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff33bbbb36669aaaaaaaaaacccccacccbbbbbbbbbbbbbbbbbbbbbbcbcc1111cccccccccc6fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff33bbdbb6669a9aaaaaaaacccccaccccbbbbbbbbbbbbbbbbbbbbccbcc1111cccccccccc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff33dbbbbb669a9aaaaaaaaaacccac6ccccbbbbebcccbbbbbbbbbccccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff33bbbbbbe69a9aaaaaaaaacccccccccccccccccccccbbbbbbbbccccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3bbbbbccbcaa9aaaaaaaaaccccc6cccccccccccdcccebbbbbbbcccccccccccbbcccccc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3bbbbbbbbcca999aaaaa8866ccc6ccccccddccdbbdccbbbbbbbcccccccccccebcccccc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3bbbbbbbbccc9999aaaa886ccccccccccddddbbbbdcccbbbbbbbbcccccccccccc111cc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3ebbbbcccccccc99aaaaaaccccccccccccccddbbbbcccbbbbbbbbccccccccccc11111119ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3bbbbbcccccccccaaaaaacccc66cccccccccdddddbddccbbbbbbcccccccccccc181181b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbccccccccccaaaaacccccccccccccccccdcccccccbbbbbbcccccccccccc181181b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccbaaaaccc6ccccccccccccccccccccccbbbbbcccccccccccc18111cb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbbaaaaaacccccccccccccccccccccccbbbbccccccccccccccc1111c69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccbaaaaaaacccccccccccccccccccccccbbbbcccccccccccccccc11cc69ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbbaaaaaaacccccccccccccccccccccccbbbbcccccccccccccccccccc6fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccbaaaaaacccccccccccccccccccccccccbbbbcbcccccccccccccccccc6fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccbaaaaaacccccccccccccccccccccccccbbbbbcccccccccccccccccc69ffffffffffffffffff99999999999ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbccccccccaaaaaacacc6ccccccccccccccccccccbbbbccccccccccccccccccc69fffffffffffffff99999999999999996fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbcaaaaaaaacc6ccccccccccccccccccccbbbbcccccccccccccddcccc6fffffffffffffff9999999999999999966ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccca9aaaaaaaac6ccc6ccccccccc111ccccbbbbccccccccccccbdccccc6ffffffffffffff999999999999999996666fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccca9abbaacccccccc6ccccccccc1111cccbbbccccccccccccbbdcccc69ffffffffffff9999999999999999996666666fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9aaadbbbccccccccccccccccc111a1cccccbccccccccccccbcccccc6fffffffffffff9999999999999999996666666fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc9aa9aabbbcccccccccccccccc1a111ccccbbbbccccccccccbccccc69ffffffffffff999999999999999999966666666ffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbccccaaaaaadbbddccccccccaccccc111ccccccbbccccccccccccccccc669fffffffffff99999999999999999996666666666fffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbccccaaaaaaaabbadcccccccacccccc1cccccccbbccccccccccccccccc69fffffffffff9999999999999999999966666666888ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbccaaaaaaaadbbdaccacaccccccccccccccccbbcbcccccccccccccd669fffffffffff9999999999999999999666666666888ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbcccaaaaaaaaadbbccaccccaccccccccccccccbbbcccccccccccc9b69ffffffffffff9999999999999999999666666668888ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbccaa99aaaaaaabbbcacccccccccccccccccccbbbcccccccccccccb6ffffffffffff999999999999999999966666666688888fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc9aa9aaaaaaaabbcaccaaacccccccccccccccbccccccccccccc699ffffffffffff99999999aaa9999999966666666888888fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc99aaaaaaaaaadbbacccaaccccccccccccccccccccccccccccc69fffffffffffff99999999aba9999999966666666888888fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9aaaaaaaaaaaadbbcccaacccccccccccccccccccccccccccc69ffffffffffffff99999999aaa9999999666666668888888fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969cccaa9aaaaaaaaaaddccccaacccccccccccccccccccccccccc66fffffffffffffff9999999999999999996666666688eee88fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9aa9aaa9aadaaddcccccacccccccccccccccccccbbcccc669fffffffffffffff9999999999999999996666666688ece88fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96cccaaa99aa9ddddccccaccccccccccccccccccccccbeccc669ffffffffffffffff9999999999999999996666666688eee88fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96caaaa99aaaaaddccccaaaaaaccccccccccccccccddccc669fffffffffffffffff999999999999999999666666668888888fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff969aaaa99aadddacaccacacccccccccccccccccccdccc669ffffffffffffffffff9999aaa9999999999966ccc6668888888fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969aaaa9aaaaaaaaccacaccccccccccccccccccccc669ffffffffffffffffffff9999aba9999999999666cac6668888888fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99aa9aa9aaaaaaaaccacccccccccccccc6cccccc669fffffffffffffffffffff9999aaa9999999999666ccc6668888888fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9a9999aaaaaaacccccccccccccccccc11cccc699fffffffffffffffffffffff999999999999999966666666688eee8ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96999aaaaaacccccc11cccccccccc1ccc669fffffffffffffffffffffffff999999999999999966666666688ece8ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999aaaacccc1c1ccccccccc1cc6669fffffffffffffffffffffffffff999999999999999966666666688eee8ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99611a11c661cc111cccc6116699ffffffffffffffffffffffffffffff99999999999999966666666668888fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff991a1111611118111666699ffffffffffffffffffffffffffffffffff999999999999996666666666888ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffff9999999999999666666666688fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffff9999999999999666666666688fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999996666666666fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999666666666ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999996666666fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999666ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
effects.starField.startScreenEffect()
info.setLife(2)
game.setDialogFrame(img`
    ..................................................................
    ....33.......33...........dddd............dddd............aaa.....
    ...a533.....393....ddddddd1111d....ddddddd1111d....3333...a35a....
    ...a553aaa339993.dd1111dd111111dddd1111dd111111dd.39393aaa3553aa..
    ..a355555a3999993d11911111111111dd11911111111111d339993a555555553.
    .a555555333399933119991111111111111999111111111113999993a55555533.
    .a355555333393931111911111115511111191111111551111399933a3555533..
    .aa355555a1333311111111111115511111111111111551111339331a55555a...
    ...a55355a1111111111111111111111111111111111111111133311a55335a...
    ...a5aaaaa1111191111111111111111111111111111111111111111aaa33aa...
    ...aa3311115511111111111111111111111111111111111119111111113333...
    ..3339331115511111111111111111111111111111111111111111551133393...
    ..39999331111111111111111111111111111111111111111111115511399993..
    ..339999311111111111111111111111111111111111111111111111113399993.
    ..399993311111111111111111111111111111111111111111111111113999933.
    ...339331191111111111111111111111111111111111111111111119113393...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...393311911111111111111111111111111111111111111111111191133933...
    .339999311111111111111111111111111111111111111111111111113399993..
    .399993311111111111111111111111111111111111111111111111113999933..
    ..39999311551111111111111111111111111111111111111111111113399993..
    ...3933311551111111111111111111111111111111111111111155111339333..
    ...3333111111119111111111111111111111111111111111111155111133aa...
    ...aa33aaa1111111111111111111111111111111111111111911111aaaaa5a...
    ...a53355a1133311111111111111111111111111111111111111111a55355a...
    ...a55555a1339331111551111111111111155111111111111133331a555553aa.
    ..3355553a339993111155111111191111115511111119111139393333555553a.
    .33555555a399999311111111111999111111111111199911339993333555555a.
    .355555555a399933d11111111111911dd11111111111911d3999993a555553a..
    ..aa3553aaa39393.dd111111dd1111dddd111111dd1111dd.399933aaa355a...
    ....a53a...3333....d1111ddddddd....d1111ddddddd....393.....335a...
    .....aaa............dddd............dddd...........33.......33....
    ..................................................................
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 a a 3 3 3 3 3 3 a a 3 . 
    . . 3 3 a a 3 3 3 3 3 3 a a 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 a a 3 3 3 3 a a 3 3 3 
    . . 3 3 3 a a 3 3 3 a a a 3 3 3 
    . . . 3 3 a a a a a a a 3 3 3 3 
    . . . 3 3 3 a a a a a a 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogTextColor(3)
game.showLongText("eat cuberries to not be hungry dystroy those bad slimes and get those nice pink slimes!", DialogLayout.Center)
pink_slime_ship = sprites.create(img`
    . . . . . a 3 c d 3 a . . . . . 
    . . . . . a 3 c d 3 a . . . . . 
    . . . . . . 3 c d 3 . . . . . . 
    . . . . . . 3 c b 3 . . . . . . 
    . . . . . . 3 f f 3 . . . . . . 
    . . . . . . 3 c 3 3 . . . . . . 
    . . . . . . 3 f f 3 . . . . . . 
    . . . . . 3 3 8 3 3 3 . . . . . 
    . . . . . 3 8 8 1 a 3 . . . . . 
    . . . . 3 3 8 3 1 a 3 3 . . . . 
    . . . 3 3 c c c a a a 3 3 . . . 
    . 3 3 3 8 8 3 3 3 1 a a 3 3 3 . 
    3 3 8 f f f c c a a f f a a 3 3 
    3 8 8 8 8 a a 3 3 3 3 1 3 a a 3 
    8 8 8 8 8 8 a a 3 3 3 1 3 3 a a 
    8 8 8 8 8 8 a a 3 3 3 3 1 3 a a 
    `, SpriteKind.Player)
tarr_afect = statusbars.create(20, 2, StatusBarKind.fear)
needs_food = statusbars.create(20, 2, StatusBarKind.hunger)
needs_food.value = 0
tarr_afect.value = 0
tarr_afect.attachToSprite(pink_slime_ship, -25, 0)
needs_food.attachToSprite(pink_slime_ship, -30, 0)
pink_slime_ship.setPosition(74, 106)
controller.moveSprite(pink_slime_ship)
pink_slime_ship.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(50)) {
        bad_tarr_slime = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f 8 8 f f f . . . . . 
            . . f f 8 8 8 8 f f 2 2 f f . . 
            . . 8 8 8 f f f f 2 2 f f f f . 
            . . f f 1 1 f 2 2 2 f f 1 1 f . 
            . . f f 1 1 f f f f f f 1 1 f . 
            3 3 f f f f f f f f f f f f f f 
            . 3 3 3 f 7 1 f f f f 1 7 f f 9 
            . . f 3 f 7 1 f f f 1 7 7 f f 9 
            . . . 3 f 7 7 1 1 1 1 7 f f 9 f 
            . . . f f f 7 7 7 7 7 7 f 5 . . 
            . . . f f f f f f f f f 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 40)
        bad_tarr_slime.setPosition(randint(scene.screenWidth(), scene.screenWidth() - scene.screenWidth()), 0)
        bad_tarr_slime.setKind(SpriteKind.Enemy)
    } else if (Math.percentChance(50)) {
        cuberry = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . 2 2 1 2 . . . . . . . 
            . . . . 2 2 1 2 1 . . . . . . . 
            . . . 2 2 2 2 2 2 . . . . . . . 
            . . 2 2 2 2 4 4 4 . . . . . . . 
            . . 2 2 2 2 4 5 4 . . . . . . . 
            . . 4 4 4 2 4 4 4 . . . . . . . 
            . . 4 5 4 2 2 2 2 . . . . . . . 
            . . 4 4 4 2 2 2 2 . . . . . . . 
            . . 2 2 2 2 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 40)
        cuberry.setPosition(randint(scene.screenWidth(), scene.screenWidth() - scene.screenWidth()), 0)
        cuberry.setKind(SpriteKind.Food)
    } else {
        i_dont_know_a_slime = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . 3 3 a a 3 3 3 3 3 3 a a 3 . 
            . . 3 3 a a 3 3 3 3 3 3 a a 3 . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            . 3 3 3 3 a a 3 3 3 3 a a 3 3 3 
            . . 3 3 3 a a 3 3 3 a a a 3 3 3 
            . . . 3 3 a a a a a a a 3 3 3 3 
            . . . 3 3 3 a a a a a a 3 3 . . 
            . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 40)
        i_dont_know_a_slime.setPosition(randint(scene.screenWidth(), scene.screenWidth() - scene.screenWidth()), 0)
        i_dont_know_a_slime.setKind(SpriteKind.slime)
    }
})
forever(function () {
    if (tarr_afect.value == 100) {
        game.over(false)
    }
})
forever(function () {
    if (needs_food.value == 100) {
        game.over(false)
    }
})
game.onUpdateInterval(200, function () {
    needs_food.value += 1
})
game.onUpdateInterval(200, function () {
    tarr_afect.value += 1
})
