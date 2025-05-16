// src/pages/Auth/ResetPassword.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import { resetPassword } from '../../services/authService';
import toast from 'react-hot-toast';

interface ResetFormInput {
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ResetFormInput) => {
    if (!token) return toast.error('Invalid token');

    const result = await resetPassword(token, data.password);

    if (result.success) {
      toast.success('Password reset successfully');
      navigate('/login');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <Input
          label="New Password"
          type="password"
          placeholder="********"
          error={errors.password}
          {...register('password')}
        />

        <Input
          label="Confirm New Password"
          type="password"
          placeholder="********"
          error={errors.confirmPassword}
          {...register('confirmPassword')}
        />

        <Button
          type="submit"
          label={isSubmitting ? 'Resetting...' : 'Reset Password'}
          className="w-full mt-4"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ResetPassword;
