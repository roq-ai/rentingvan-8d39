import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  van_id: yup.string().nullable(),
});
