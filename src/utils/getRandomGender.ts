export const getRandomGender = (): string => {
    const genders = ['men', 'women'];
    const randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
};