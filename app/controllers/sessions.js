import passport from 'passport';
import { validationResult } from 'express-validator/check'
import jwt from 'jsonwebtoken';
import jwtOptions from '../utils/jwt-options';

const signin = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.mapped()})
  }

  passport.authenticate('local', (err, user) => {
    console.log("user %d", user)
    if (err) { 
      return res.status(422).json({message: err}).end(); 
    }
    if (!user) { 
      return res.status(422).json({ message: 'Usuario o contraseña inválidos'}).end() 
    }

    let payload = {id: user.id};
    let auth_token = jwt.sign(payload, jwtOptions.secretOrKey);

    res.status(200).json({user, auth_token}).end();
  })(req, res);
}

export default {
  signin
}