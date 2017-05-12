/**
 * Created by freeman on 17-3-26.
 */

class Header {
  constructor(header) {
    // æ˜¯å¦æ˜¾ç¤ºheader
    this.isShow = (header && header['isShow']) ? header['isShow'] : true
    //æ˜¯å¦æ˜¾ç¤ºå³ä¾§æ–‡å­—
    this.isRightTxt = (header && header['isRightTxt']) ? header['isRightTxt'] : false
    //å³ä¾§æ˜¾ç¤ºæ–‡å­—
    this.rightTxt = (header && header['rightTxt']) ? header['rightTxt'] : ''
    // å³ä¾§äº‹ä»¶
    this.rightEvent = (header && header['rightEvent']) ? header['rightEvent'] : null
    //å·¦ä¾§äº‹ä»¶
    this.leftEvent = (header && header['leftEvent']) ? header['leftEvent'] : null
    //å·¦ä¾§ç®­å¤´äº‹ä»¶
    this.backEvent = (header && header['backEvent']) ? header['backEvent'] : false
    //æ˜¯å¦æ˜¾ç¤ºæœç´¢æŒ‰é’®
    this.isSeach = (header && header['isSeach']) ? header['isSeach'] : false
    //æ˜¯å¦æ˜¾ç¤ºæ›´å¤šæŒ‰é’®
    this.isMore = (header && header['isMore']) ? header['isMore'] : false
    // æ›´å¤šæŒ‰é’®ç‚¹å‡»äº‹ä»¶
    this.moreEvent = (header && header['moreEvent']) ? header['moreEvent'] : false
    // è½¬è®©æŒ‰é’®äº‹ä»¶
    this.transferEvent = (header && header['transferEvent']) ? header['transferEvent'] : null
    //æ˜¯å¦æ˜¾ç¤ºè¿”å›žæŒ‰é’®
    this.isShowBack = (header && header['isShowBack']) ? header['isShowBack'] : false
    //æ˜¯å¦æ˜¾ç¤ºå·¦ä¾§æ–‡å­—
    this.isLeftTxt = (header && header['isLeftTxt']) ? header['isLeftTxt'] : false
    //å·¦ä¾§æ˜¾ç¤ºæ–‡å­—
    this.leftTxt = (header && header['leftTxt']) ? header['leftTxt'] : ''
    //æ ‡é¢˜æ–‡å­—
    this.title = (header && header['title']) ? header['title'] : ''
    //æ˜¯å¦æ˜¾ç¤ºåˆ‡æ¢ç­çº§
    this.isGrade = (header && header['isGrade']) ? header['isGrade'] : false
    //æ˜¯å¦æ˜¾ç¤ºç­çº§å°ä¸‰è§’
    this.isArrow = (header && header['isArrow']) ? header['isArrow'] : false

    this.moreItem = (header && header['moreItem']) ? header['moreItem'] : false
  }
}
//带返回按钮的header
export const backHeader = new Header({isShowBack: true})
//默认header
const header = new Header();

export default header
