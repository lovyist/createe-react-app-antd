/**
 * Created by freeman on 17-3-26.
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'
import WeUI from 'react-weui'
const {TabBar, TabBarItem} = WeUI
class Footer extends Component {
  render() {
    const {className, location} = this.props
    return (
      <TabBar className={className}>
        <TabBarItem >
          <Link to="/" className={classNames({'active': location.pathname === '/'})}>
            <div className="weui-tabbar__icon">
              <img
                alt="index-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII="/>
            </div>
            <p className="weui-tabbar__label">首页</p>
          </Link>
        </TabBarItem>
        <TabBarItem>
          <Link to="/mine" activeClassName="active">
            <div className="weui-tabbar__icon">
              <img
                alt="mine-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABUCAYAAAARdWCGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2E0YTFmMC02NDYxLTQwNTUtOWUyNS00YTU1ZGFiYjdjMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdEODhEMzA5NDRFMTFFNkE5NjI5QTIxMENFMDg2NUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdEODhEMkY5NDRFMTFFNkE5NjI5QTIxMENFMDg2NUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGEyY2ZjMjMtNDBlZS00ZTBiLThhM2QtZDEzOGIyNDIwZDEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYTRhMWYwLTY0NjEtNDA1NS05ZTI1LTRhNTVkYWJiN2MyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrKizt4AAAUHSURBVHja7J3baxdHFMfnpzHBqI1NYlJRRBE14L2KIdrGPpRE24eI4kOMfRADWgVR8Q8oRbQtvti0oqLig4hQaanFVosU1AgajPcoeL+BqSBGfwoqSbbnMF8fGlZ/t53fnFnmwBfJXmbOfn67c9k5Z00EQaC85W4JD9KD9CA9yL4n73oStT8lpM9JtaRJpLHYNpTURXpGukW6QjpBOoZtkVnQXOYsyASpnrSS9CWpIINzu0mHSdtJR5mDLZD9LD8RdaSzpL9IDRlCVDi+AedfJM2zdSG2QJaS9uEu+jiiMicD6D6UH3uQM3D3NBkqvwnlz4gzyAZ0EiMN1zMS9SyII8hFpIOk4jzVx/X8gnpjA7KGtD+LziRXK0C9NXEAOYL0G6nQUsdWiPpHuAySx4h7SJWWh1mV8CPhKshmjBUlWB38cQ7kB6SNwqbEG+GXUyDXkyqEgayAX86AHEharWTaavjnBMglpHKhIMtNzKpMgWxUsq3RBZDDSJ8JBzkXfooGycOM/sJBsn/10kF+qtywOdJBTnME5HTpIKscAVklGeQgpRerXLAS+CsSZKlyy8qkghzsGEixd2Q/x0AmpF540jGQL6SCfOoYyC7Jd2SXQxCfS27TbjoCMlI/TYC84AjI89JBtjoC8pR0kP+oCKLCDFsAP0WDfEBqEw6yDX6KH0AfEA4ycv9Mgdwb5WDXwCB8rysgeYy2WyjI3SbGuibnxpuiHPBGOGHYbKJgkyAfk74XBvI70r+ugWT7gdQuBGI7/FEuguSsg6+U/bdCSfjR7SpItmukpRYH6QEgXjNZiQmQw0O2HSKttQRyHen3NP0UA/Jr0g0VviT7I2kNqSdPAHtQ39aQfezfddIqiSCXkX5Weh2Eg+7DQkJalM5sMN1mJlFPS8i+YfCP15d+Ii2XBHKW0mlsb9dAOIfwDxWewcApb7w4b+otUSvKPxyyrxh+jcXf7O82+G8d5ACls636BttXK52JFbayyImZHMi0gvQoIoBczkqUeytk/2D4U91neyH8H2AbJLcz496xj7NcOYM1LHK3l7QTdweXcSnL+i/hfC5nB8rtaxXwo/YdZYzLtb3MNTu2AL/+qBSH3iUtVjqB833G+YScmMmBWBNJY9T/l0zZ2TukDtJJ0hHS5RRlzlQ6cWl0iuPu848RNJd12wDJIXxH0zz8Nekb0pYMBsYcfsfB8x8qvUL5PINen3/kDaizKM1z6gnk3zYe7fkZHFuEFwY8VUs3E6sHAG/j33Qh1qCezRlAzPR6IgU5M4tzpii9XvLne9qsbK0W5Z5CPfm4nkhAjs+2VcCvf5x0WulMg2xnGsNx/mmUN19lH4oywVZn8yrDRyfVnJi/VXEOjyXPjZ/gkebvVpSgrSxFDz2V9Ak6qKhieN5QG1lkA2TsPtFCIBM2Hm1vHqQH6UF6kN48SA/Sg/QgvVkEmYwZj6QtkJ0xA9lpC+TVmIHssAXyZMxAnrAFkteHe2MCka/jV1sg7ym9ABUHO4LrsTb8+VbJz2JIZQGuw+o48oySG+acru3CdVgfkK91uAfnJY11UmY2L5X+/MsDxyCyv3XwX8wU8aHSERKu3JlX4e9DiXNt7vU4SGmH4A4ogH/VufTS+XhpwQlBHBU2W+noLynjzF74Mxv+RZpQZfLjwbxg/4XSAVYLlQ6348Coj0hD8vQCohPTvuMYbN83VZn/30M8SA8ylvafAAMAl+gZS0HKljIAAAAASUVORK5CYII="/>
            </div>
            <p className="weui-tabbar__label">我</p>
          </Link>
        </TabBarItem>
      </TabBar>
    )
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default Footer
