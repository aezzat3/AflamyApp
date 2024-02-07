import { IMAGES, IMAGE_BASE_URL } from '../common';
import moment from 'moment';

export const getImageSource = (path?: string, placeholder?: string) =>
  path ? { uri: `${IMAGE_BASE_URL}${path}` } : placeholder || IMAGES.placeholder;

export const formatDate = (date: string) => moment(date).format('LL');
