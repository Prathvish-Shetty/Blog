
import React from 'react';
import { Signup as SignupComponent } from '../components';
import { Container } from '../components';

function Signup() {
  return (
    <div className="py-8 flex justify-center items-center min-h-screen">
      <Container>
        <SignupComponent />
      </Container>
    </div>
  );
}

export default Signup;
