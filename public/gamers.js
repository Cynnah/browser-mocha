export const makeGamer = gamer => `<li>${gamer.name} plays ${gamer.game}</li>`

const makeGamersList = gamers => `
  <ul>
    <li>Thomas plays XCOM</li>
    <li>Clément plays GTA</li>
  </ul>
`

export default makeGamersList
