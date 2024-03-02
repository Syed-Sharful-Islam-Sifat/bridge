import User from "@/models/users";

const userRepository = {
  create: async ({ formData }) => {
    console.log("authrepo", formData);
    const user = await User.create({
      ...formData,
    });
    return user;
  },
  findByEmail: async ({ email }) => {
    const user = await User.findOne({
      email,
    });
    console.log(user)
    return user;
  },

  findByUserName: async ({ userName }) => {
    const user = await User.findOne({
     userName,
    });

    return user;
  },
};

export default userRepository;
