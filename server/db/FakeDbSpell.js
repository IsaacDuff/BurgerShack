

export class Spell {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.damage = data.damage
        this.type = data.type
        this.class = data.class
        this.description = data.description
    }
}

class FakeDBSpells {
    spells = [
        new Spell({
            id: 1,
            name: 'Fireball',
            damage: '8d6',
            type: 'Fire',
            class: 'Evocation',
            description: 'A ball of fire flys to a spot within 120ft and explodes in a 20ft radius sphere.'
        }),
        new Spell({
            id: 2,
            name: 'Witchbolt',
            damage: '1d12',
            type: 'Lightning',
            class: 'Evocation',
            description: 'A bolt of lightning stikes a target within 90ft dealing damage. This can be repeated every round as an action for 1 minute. No attack roll needed for subsquetial turns. '

        }),
        new Spell({
            id: 3,
            name: 'Flaming Sphere',
            damage: '2d6',
            type: 'Fire',
            class: 'Conjuration',
            description: 'A ball of fire 5ft in diameter is conjured within 60ft of you. as a bonus action on each turn for 1 minute you may move the ball up to 30 ft and ram it into and enemy dealing damage. '

        }),
        new Spell({
            id: 4,
            name: 'Meteor Swarm',
            damage: '20d6',
            type: 'Fire and Bludgeoning',
            class: 'Evocation',
            description: 'You call 4 meteors from another realm to smash down in 4 separate locations within 1 mile exploding in 40ft radius spheres. These deal dice damage of each damage type.'

        }),
        new Spell({
            id: 5,
            name: 'Blight',
            damage: '8d8',
            type: 'Necrotic',
            class: 'Necromancy',
            description: 'You point at a target within 60ft, they take damage equal to the damage roll.'

        }),
        new Spell({
            id: 6,
            name: 'Tashas Mind Whip',
            damage: '3d6',
            type: 'Psychic',
            class: 'Enchantment',
            description: 'You lash out at a target within 90 ft with your mind dealing dice damage to them.'

        }),
        new Spell({
            id: 7,
            name: 'Lightning Bolt',
            damage: '8d6',
            type: 'Lightning',
            class: 'Evocation',
            description: 'You unleash a bolt of lightning 5ft wide and up to 100ft long that deals dice damage to creatures hit. '

        }),
    ]
}