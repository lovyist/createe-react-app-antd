/**
 * Created by Freeman on 2017/3/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import * as Actions from '../../../../actions'
const mapStateToProps = (state) => {
  return {
    header: state.header,
    auth: state.auth,
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
class Mine extends Component {

  componentDidMount() {
    const {actions} = this.props
    actions.updateHeader({
      isShow: false,
    })
    actions.updateFooter()
  }

  render() {
    const {auth} = this.props
    return (
      <div className="none-head-transform-body">
        <div className="blue-bg">
          <div className="vue-center-h">
            <div className="text-center">
              <div className="head-img-wrap">
                <Link to="">
                  <div className="head-img">
                    <img
                      alt="avar"
                      src="http://wx.qlogo.cn/mmopen/00GYaClAoOqX7AdSALQONV8U6Z9lcFsOzRlsCjicgWicvEfRAbbia7saLXJdy3SuxrpUVhRD3WfN6m2huc7zFy8eA/0"/>
                  </div>
                </Link>
                <div className="head-mark-wrap">
                    <span className="head-mark teacher-mark">
                    </span>
                </div>
              </div>
              <div>
                <span className="write">{auth.userInfo.username}</span>
                <div className="role-list">
                  <span>班主任</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="weui-cells vux-no-group-title">
            <Link className="weui-cell weui-cell_access" to="/mine/settings">
              <div className="weui-cell__hd">
                <img width="20"
                     alt="setting"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAYAAAAlFqMKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2E0YTFmMC02NDYxLTQwNTUtOWUyNS00YTU1ZGFiYjdjMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAzM0QzRjQ5QTkzMTFFNkJEQTVBOThEODlGNzMxREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAzM0QzRjM5QTkzMTFFNkJEQTVBOThEODlGNzMxREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGEyY2ZjMjMtNDBlZS00ZTBiLThhM2QtZDEzOGIyNDIwZDEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYTRhMWYwLTY0NjEtNDA1NS05ZTI1LTRhNTVkYWJiN2MyNyIvPiA8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"
                     style={{
                       display: 'block',
                       marginRight: '5px'
                     }}
                />
              </div>
              <div className="weui-cell__bd ">
                设置
              </div>
              <div className="weui-cell__ft">
              </div>
            </Link>
            <Link className="weui-cell weui-cell_access" to="/map">
              <div className="weui-cell__hd">
                <img width="20"
                     alt="setting"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAYAAAAlFqMKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2E0YTFmMC02NDYxLTQwNTUtOWUyNS00YTU1ZGFiYjdjMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAzM0QzRjQ5QTkzMTFFNkJEQTVBOThEODlGNzMxREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAzM0QzRjM5QTkzMTFFNkJEQTVBOThEODlGNzMxREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGEyY2ZjMjMtNDBlZS00ZTBiLThhM2QtZDEzOGIyNDIwZDEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYTRhMWYwLTY0NjEtNDA1NS05ZTI1LTRhNTVkYWJiN2MyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plr3vcUAAAjBSURBVHja3FsJbFZFEN5eUArUhkIVFUQoWFtSQFBBiNFo8CIgtRQECUZQExCUQ1JECYLIIWrQmKgccpWjoRoVEYkHiQKtiQjE1qqoKChSjnC2CK04k35Pf5bZ997+/fsK/yRf0u7bt29mdnd2jv1j1MJDKiCKI4wjjCJ0JCR49D9L+ImwiPAaoSYIJmMCUkgMYQ0hL8z31+Hdc/XNaGxAq2NwHZTBlIsxVLQo5MEIjDE0CEbjA1LINULbXsJSwimtvSlhBKGt1t42mhSir8QKwg0EkwF7nfAdIS3o1RzUltHpIxdlMB1En8CpoRRyOkJ9LjmFtCRMJrSLwFg8xtOE1IZUSBLhAcIkQg7+90OtYAfYcM4lNI8ArzzGPMI+jJ3m870k8D4JsjQN16jeQ1iOWXZoP+FZnA7/GMYbT5hGaFZPk5hIeILwMGEG4VVCtWGyuc8LhNYh7YcJwwkf26yQboR3NWUoDLyYsIXQU3uWgfZ5HsrgGd7pQ/Cd6GuiZvjWFnw7lHqifbGmDIUt9x5k9OW6s5u9VRBYJ3aj38GKuZmwjJDsogTuW4jj1IayCIMIIwlXG/och+9SQpiFlRHjMS737aWHA5JChhFWWjBcSWhiYGA3YToUcbaOWyUB7j+Pl26YoCoLO8f0EKHAbcvwYLMNM/Czi9HSlcGM5WN2CyKgDCf6LcCY+fiGvrJNyviFcEJon62/oyuEj7U2ghN1JWalB6HYg3HeEt1xupypB6N6BmN397H9mNcbCR1gS3Rnrw1kFrcM788fNI0dhyIOajPBgdZLgsH6AIFcZUB+FPO6mtBfa98P/6dAsxFpyLEka1v+OseAx7otH6KZmjKcvcof6kSYE7IKVuC8D0oZjjA5MOjO6pkD3lYK+ZMKyGQ0E84K4VNim2YL2CB2JvztwVQ6VsWLQWW1BIqDXVkLvt2oMbZaujbJfOKUOAr5ktBHezEH53U00kD4WaHEOriVFZJJf5RqDw/APpyLUoXwTvhLcP+zYnGMSe5xvIpeisfWucAJ5AfHhAeXwdDkG+KESNAVhL6EbMLlMIh/wAZswgzWl72ZAxl1OsZbhr3MPwkpQodvCRMImyPIUDa8zf5gTqIaHOHcb1cEv30b4RVDHHOUcFUsPL7xLkHeFzjr20ZgZjg6/QZGLc6j70D0neHR1w8x76sgSzdDH9ZBpeOHcDg/2CWtN4RQTpiKuCUcZbBf8JylbYrHOwVhKqUJeC5X5sz/Ici3VAruUhAtPubC+B54djZuOVfexhqeVYX4DukuCuek0DiLbzaC523K1rFtfBsKO2qKZfjBGEJXF7txxFIZ9xqUUaZqC1AtYFey8Xcunuk0FmPZxDxHDM82Q8YxocpwSxCxX3K7kqttn1qmKOcL7QvBUJE6P5l8Gm1d0Uenl5VdHniT0JYH2UptMmYOfe2zzUR3Ea7X2tYTHvdICZxFn/VCVu5ui+9b8++lkE5CW7kFQ7nCMn7KpwfMfZ4Utmeuxfd/9CmTb4W0MSRb/NIt2v+fuySaTImdz7S2Xpbv+5HJt0JShaVcZcFQB+3/r8I4Ord4jOlGVcLWTK2LQuKE/ION76FfijkchkL0dxIsfZJKD5msFFIjJFP8Uo3t7BiohbBKbfIuSR4yWSlEmh0bT1W3F73DUEgfjzG9PFWrVeqlkL1CW3sLhrZq/99h+X57vBNK2yzf9yOTb4VIx1aGBUNFgju9QHkXkZwkzgK8E0rrLL7fyadMvhVyk882E20U/JZ+hDeV+y3EBPTpJ/hAGy2+b82/SSFZCJULhWd3WjDEBfGJQjsHj9tVbTU+MaQ9EW3b0UeniUouspuor9BWCNmy/CiEo903CDuQTDFZ/UYWTG1ApKpTZyx/DsC4sP09Aq11eCZFuxsso90WLomiHZA1xaQQrnNyEWe0IfRnJ4cL25nKviI33rDanJMgG7apsaFPoUsSyy3azQTPVYZcy2jIPFxXyKOqttDU0jD4GjA8y9JTDT37udo3U9nlaKvxzlAVXs2nCjwz76sNfVjm5dCBaoicKof2fKHGK6f6IeF5LO1IEW8V15wqK4QNzydCB76ZM1kFk3V3asRck92l6j/rPh9R9wXpClbIIGF/c2milYrMNYaLkdjgcp1XL0XkxRoyR6frcWVcDMQTLdWsS1khZUJYzoWj+6NYISxbmpCaKHNOmUlCFmueyzEYSuk42uIaUED+9jNKvmqlE8s0V2s7Bx38d+zyBbQCQdCxLgPzLcDZ2HJ8NC5uIKXwNxfieC0FT263IFmmjlpbAXQQ9g2iYVhBF8MNIq7IDdDaTTeI+KDgGpCvG0T7IGQo8Yt8ndK5/dsdIf0KQRkKvkWJZUQcLmXgWwOEZ63BI/PaA21NIUuyYBr2/T/b51fukhBR6olYvsF3wOcedTzEaQjfI310cyTM2fgZFsmq3TCiyUJuJCN0RevBHT+YIgzY3EUZlYJBZkZfwgk2VHn/4NAPxWM7lmHsJoJhrHQx/NKl4in6O1L4z3uy2AeDzMASfCwH9kZihPcxlwOmI9iypUy8+yt4kybmOHhIx7bwU/cpwXhaVkr+VWY37L9Ew2DFiD6LtT29zEcCaS9OhLc8+nHlbqryqKOo2krcCC0R1ROhh+l6OjtlvRCr+UoQccch6sJiMVtvvnPeW1hF5Whn637SRQAWsIuPGezioYyT+FZvIStXjPaR4DmUWKY8SRlKud/VeF/VXjThn4m0w7Lf6HGkVmN/80rhex2jXFZZuMRhxSL4PhUe2bolSF2wDNeq2qsc/LOQU26Gyo1OKbukrkMVcIA4fH8Enmxdf0R0AkpgIW0KXjyBRX471/dPzA7hnN8TgbH2YPUdrk+GG+pHiIkR6hM1CrlPuZc1U9EncArqcq5eOmCvkW8Ycp7zqPYsBQ5YmscYl7RCfhOOWv75e77FGL9H05ZZHYExVkWTQtbaHH0CFWGMqFEIxxZ8MXgCvEo/+dpq9J2AdwP5Zca/AgwA3G4E2eEh7BIAAAAASUVORK5CYII="
                     style={{
                       display: 'block',
                       marginRight: '5px'
                     }}
                />
              </div>
              <div className="weui-cell__bd ">
                地图
              </div>
              <div className="weui-cell__ft">
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
Mine.propTypes = {
  auth: React.PropTypes.object,
  header: React.PropTypes.object,
  actions: React.PropTypes.object,
}
export default Mine
