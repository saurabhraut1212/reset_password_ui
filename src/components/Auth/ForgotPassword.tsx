// src/pages/Auth/ForgotPassword.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import { sendResetLink } from '../../services/authService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface ForgotFormInput {
  email: string;
}

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ForgotFormInput) => {
    const result = await sendResetLink(data.email);

    if (result.success && result.link) {
      toast.success('Redirecting to reset page...');
      navigate(`/reset-password/${result.link}`);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>

        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          error={errors.email}
          {...register('email')}
        />

        <Button
          type="submit"
          label={isSubmitting ? 'Sending...' : 'Send Reset Link'}
          className="w-full mt-4"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
