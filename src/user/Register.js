import React,{useState} from 'react'
import './Register.css'
import './RegisterResponse.css'

export default function Register() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const show = () => {
    setIsFormVisible(true);
  };

  const hide = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='reg'>
    <button className="link-btn" onClick={show}>Create new account</button>
    <div className={`layer ${isFormVisible ? 'show' : ''}`} onClick={hide}></div>
      <div className={`signup ${isFormVisible ? 'show' : ''}`} id="signup">
        <div className="top">
          <div>
            <h2 id='Rh2'>Sign Up</h2>
            <p id='Rp'>it's quick and easy</p>
          </div>
          <h1 className='Rxbutton' onClick={hide}></h1>
        </div>
        <hr />
        <form action="#" className="signup_form">
          <div className="signup_body">
            <div className="name">
              <input type="text" placeholder="First Name" className="same" />
              <input type="text" placeholder="Last Name" className="same" />
            </div>
            <div className="bottom">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="New Password" />
            </div>
          </div>
          <div className="birthday">
            <p className="text">Birthday</p>
            <div className="date">
              <select id="month" name="month">
                {/* Options for month */}
                <option value="Jan">Jan</option>
                            <option value="feb">feb</option>
                            <option value="march">march</option>
                            <option value="april">april</option>
                            <option value="may">may</option>
                            <option value="june">june</option>
                            <option value="july">july</option>
                            <option value="aug">aug</option>
                            <option value="sep">sep</option>
                            <option value="oct">oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
              </select>
              <select id="day" name="day">
                {/* Options for day */}
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">21</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>
              </select>
              <select id="year" name="year">
                {/* Options for year */}
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                            <option value="">2014</option>
                            <option value="">2013</option>
                            <option value="">2012</option>
                            <option value="">2011</option>
                            <option value="">2010</option>
                            <option value="">2009</option>
                            <option value="">2008</option>
                            <option value="">2007</option>
                            <option value="">2006</option>
              </select>
            </div>
          </div>
          <div className="gender">
            <p className="text">Gender</p>
            <div className="person">
              <div>
                <label htmlFor="Female">Female</label>
                <input type="radio" id="Female" name="gender" value="Female" />
              </div>
              <div>
                <label htmlFor="Male">Male</label>
                <input type="radio" id="Male" name="gender" value="Male" />
              </div>
              <div>
                <label htmlFor="Custom">Custom</label>
                <input type="radio" id="Custom" name="gender" value="Custom" />
              </div>
            </div>
          </div>
          <div className="content">
            <p>
              People who use our service may have uploaded your contact information to Scroll.{' '}
              <span className="blue">Learn more.</span>
            </p>
            <p>
              By clicking Sign Up, you agree to our Terms,{' '}
              <span className="blue">Privacy Policy and Cookies Policy</span>. You may receive SMS Notifications from
              us and can opt out any time.
            </p>
          </div>
          <button className="singup">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

