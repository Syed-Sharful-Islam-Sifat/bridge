import userRepository from "../repositories/userRepositories";
export const createUser = async ({ formData }) => {
  const data = await userRepository.create({formData:formData});
  return data;
};

export const findUserByEmail = async({email})=>{
    const data = await userRepository.findByEmail({email});
    console.log('data-->',data);
    return data;
}

export const findUserByUserName = async({userName})=>{
    const data = await userRepository.findByUserName({userName});
    return data;
}
