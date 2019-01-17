let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.ringAudio = new Audio()
    this.ringAudio.src  = 'res/ring.mp3'

    this.bgm = new Audio()
    this.bgm.loop = true
    this.bgm.volume = 0.4
    this.bgm.src = 'res/MitiS - Sky.mp3'
    // this.bgm.src = 'res/MitiS-remix.mp3'
    // this.bgm.src = 'res/Music Box.mp3'
    this.bgm.play()
        console.log("init.")
    //有问题

  }
  playBgm() {
    this.bgm.play()
  }
  playRing() {
    // console.log("playing.")
    // console.log(this.ringAudio.currentTime)
    this.ringAudio.currentTime = 0
    this.ringAudio.play()
  }

}
