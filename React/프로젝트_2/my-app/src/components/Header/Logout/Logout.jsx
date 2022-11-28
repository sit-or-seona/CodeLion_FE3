import loginIcon from '../../../assets/icon-login.svg'
import resisterIcon from '../../../assets/icon-register.svg'

export default function Logout() {
  return (
    <>
      <li>
          <a href="#" class="button gray">
              <img src={loginIcon} alt="" />
              <span>Login</span>
          </a>
      </li>
      <li class="only-pc">
          <a href="#" class="button gray">
              <img src={resisterIcon} alt="" />
              <span>Register</span>
          </a>
      </li>
    </>
  )
}