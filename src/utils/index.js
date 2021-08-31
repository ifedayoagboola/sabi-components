// import cogoToast from 'cogo-toast';

export * from './api';

// export const showToast = (message, type = null) => {
//     if (type) type = type.toLowerCase();

//     switch (type) {
//         case 'success':
//             cogoToast.success(message, { position: 'top-right' });
//             break;
//         case 'info':
//             cogoToast.info(message, { position: 'top-right' });
//             break;
//         case 'loading':
//             cogoToast.loading(message, { position: 'top-right' });
//             break;
//         case 'warn':
//             cogoToast.warn(message, { position: 'top-right' });
//             break;
//         case 'error':
//             cogoToast.error(message, { position: 'top-right' });
//             break;

//         default:
//             cogoToast.info(message, { position: 'top-right' });
//             break;
//     }
// };

// export const callbackToast = message => {
//     const { hide } = cogoToast.loading(message, { hideAfter: 0, position: 'top-right' });

//     return hide;
// };

// export const capitalize = string => {
//     if (string) {
//         string = string.toLowerCase();
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
// };

// export const formatText = text => text?.toLowerCase()?.split(' ')?.join('_');
