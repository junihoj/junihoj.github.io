import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

interface IContactData{
    name:string,
    email:string,
    message:string,
}

const useHandleContactForm = ()=>{
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzEutxtVo-QvrnEJYgPJeaNsfiX6gOAJWePhfQtxY4Qvwuu1hLw5grVdjagi1ZIf16kzQ/exec';
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email:Yup.string().email('Not a valid email').required('email is required'),
        message: Yup.string().required('Message is required')
    });

    
    const handleSubmit:any = async (values:IContactData) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('message', values.message);
        console.log("VALUES FORMIK", values);
        console.log("VALUES FORM DATA", formData)
        try {
            const response = await fetch(scriptURL, {
              method: 'POST',
              body: formData
            });
            console.log("GOOGLE RESPONSE", response)
      
            if (response.ok) {
              toast.success('Form submitted successfully!')
              formik.resetForm()
            } else {
              toast.error('Form submission failed');
              throw new Error('Failed to submit message');
            }
          } catch (error: any) {
            console.error('Error!', error.message);
            toast.error('Error', error.message);
          }
    }
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            message:''
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return {
        formik
    }
}

export default useHandleContactForm