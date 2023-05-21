const BASE_PATH = `/heroes`;

const list = () => BASE_PATH;
const oneItem = (id: string) => `${BASE_PATH}/${id}`;
const profile = (id: string) => `${BASE_PATH}/${id}/profile`;

export { list, oneItem, profile };