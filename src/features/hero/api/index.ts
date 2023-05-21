import { list, oneItem, profile } from './path';
import { axiosBaseWithJson } from '../../../plugin/axios';

export const getList = () => axiosBaseWithJson.get(list());
export const getItem = (id: string) => axiosBaseWithJson.get(oneItem(id));
export const getProfile = (id: string) => axiosBaseWithJson.get(profile(id));