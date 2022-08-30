export type AbilityName = 'Mobility' | 'Technique' | 'Survivability' | 'Power' | 'Energy'

export interface CharacterAbility {
  abilityName: AbilityName
  abilityScore: number
}

export interface CharacterTag {
  slot: number
  tag_name: string
}

export interface Character {
  id: number
  name: string
  quote: string
  image: string
  thumbnail: string
  universe: string
  abilities: CharacterAbility[]
  tags: CharacterTag[]
}
