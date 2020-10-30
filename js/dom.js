
const isMaskData = ({ month, day }, openTime) => {
  if (!openTime) return false

  const openTimeSplit = openTime.split(':')
  const openDate = new Date('2020', (month - 1), day, openTimeSplit[0], openTimeSplit[1], '00')
  const nowDate = new Date()
  console.log('DATE')
  console.log(nowDate.getTime())
  console.log(openDate.getTime())
  return nowDate.getTime() < openDate.getTime()
}

const createCard = (date, { cardType, time, main, isSecret }) => {
  const isMask = isMaskData(date, time.openTime)
  const hidden = (isMask && isSecret) ? ' style="display:none;" ' : ''
  return `
    <li class="${cardType}-card"${hidden}>
      ${createTime(isMask, time)}
      ${createMainArea(isMask, main)}
    </li>
  `
}

const createTime = (isMask, { planTime, openTime }) => {
  const label = (isMask && openTime) ? `<label>${openTime}<br />解禁</label>` : ''

  return `
    <div class="card-time-area">
      TIME
      <p>${planTime}</p>
      ${label}
    </div>
  `
}

const createMainArea = ( isMask, { title, description, map, image }) => {
  const maskClass = isMask ? 'mask' : ''

  return `
    <div class="card-main-area ${maskClass}">
      ${createMainAreaTitle(title)}
      ${description ? createMainAreaDescription(description) : ''}
    </div>
    ${map ? createMainAreaMap(maskClass, map) : ''}
    ${image ? createMainAreaImage(maskClass, image) : ''}
  `
}

const createMainAreaTitle = ({ icon, text }) => (
  `
    <div class="card-main-area-title">
      <i class="material-icons">${icon}</i>
      <h3>${text}</h3>
    </div>
  `
)

const createMainAreaDescription = (description) =>  (
  `
    <div class="card-main-area-description">
      ${description.map(text => {
        if (Array.isArray(text)) {
          return `
            <ol>
              ${text.map(li => `<li>${li}</li>`).join('')}
            </ol>
          `
        } else {
          return `<p>${text}</p>`
        }
      }).join('')}
    </div>
  `
)

const createMainAreaMap = (maskClass, map) => (
  `
    <div class="card-main-area-map ${maskClass}">
      <iframe src="${map}" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  `
)

const createMainAreaImage = (maskClass, image) => (
  `
    <div class="card-main-area-image ${maskClass}">
      ${image.map(({ link, img }) => (
        `
          <a href="${link}" target="_blank" class="img">
            <img src="${img}" />
          </a>
        `
      )).join('')}
    </div>
  `
)

$( () => {
  const planDom = PLAN.map((plan) => {
    const isMask = isMaskData(plan.dispDate, '21:00')
    const child = isMask ?
      `
        <p class="card-now-hidden-text">前日の21:00以降に次の日の予定が確認できます</p>
      `
    :
      `
        <ul>
          ${plan.card.map(data => createCard(plan.date, data)).join('')}
        </ul>
      `
    return `
      <header>
        <h2>
          <span>2020.${plan.date.month}.${plan.date.day}</span>
        </h2>
      </header>
      <div class="card-wrapper">
        <div class="card-area">
          ${child}
        </div>
      </div>
    `
  })
  document.getElementById('20201031').innerHTML = planDom[0]
  document.getElementById('20201101').innerHTML = planDom[1]
  document.getElementById('20201102').innerHTML = planDom[2]
  if (!isMaskData({ month: '11', day: '02' }, '21:30')) {
    document.getElementById('20201103').innerHTML = planDom[3]
  }

  const key = '27378a2e596e84a965ce96789270d399'
})