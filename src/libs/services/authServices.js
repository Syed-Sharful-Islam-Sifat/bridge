import authRepository from "../repositories/authRepositories";
const createUser = async ({ formData }) => {
  const data = await authRepository.create({formData:formData});
  return data;
};


