import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  position: yup.string().required(),
  status: yup.string().required(),
  candidate_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
