import React, { useEffect } from 'react'
import Input from '../Element/Input'
import { ScrolltoTop } from '../Utility'
import { useForm } from 'react-hook-form'
import useFetchData from '../CustomHooks/useFetchData'
import Loader from '../Element/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'


function Blog() {
  document.title = 'Blog | Homepreneur'
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset} = useForm(
    { mode: 'onBlur' }
  );

  const { refetch, loading } = useFetchData('', '', '', '', '', false);


  useEffect(() => {
    ScrolltoTop()
  })

  const OnSubmit = async (data) => {
    console.log(data);

    const response = await refetch("homepreneur/campaign/support", 'post', data, true)

    if (response.status) {


      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

navigate('/support-campaign')

      reset({});
    }


  }

  const CampaignData = {
    title: "The Rise of Women Entrepreneurs: Why Recognizing Success is More Important Than Ever",
    content: "India, a country with a population of over 1.4 billion people, is rapidly becoming one of the world's fastest-growing economies. While India has seen a significant rise in entrepreneurship in recent years, it's unfortunate that the majority of entrepreneurs are men. Women entrepreneurs, on the other hand, have been an underrepresented group in the Indian entrepreneurial ecosystem. However, with the increasing need for gender diversity, it's time to recognize the role of women entrepreneurs in India's growth story. Women entrepreneurs have always been an essential part of the Indian economy. From running small businesses to large corporations, women have been instrumental in creating jobs, increasing exports, and contributing to the overall development of the country. However, despite their contributions, women entrepreneurs face several challenges that hinder their growth and success. One of the significant challenges that women entrepreneurs face is the lack of access to funding. Women entrepreneurs often struggle to secure funding due to a lack of financial literacy, limited networks, and unconscious biases. This makes it challenging for them to scale their businesses and compete with their male counterparts. Another challenge is the lack of support systems. Women entrepreneurs often have to balance their professional and personal responsibilities, and this can be particularly challenging in a country like India, where traditional gender roles are prevalent. The lack of support from family and society can discourage women from pursuing their entrepreneurial dreams. Despite these challenges, there is a pressing need for more women entrepreneurs to develop in India. Women entrepreneurs bring unique perspectives, innovative ideas, and new solutions to the table, leading to increased innovation and competitiveness. Women entrepreneurs also play a crucial role in creating employment opportunities, which in turn leads to economic growth and development. Moreover, promoting women entrepreneurship is not just about empowering women; it's also about creating a more inclusive and equitable society. When more women are economically empowered, they can make significant contributions to society, leading to a more prosperous and sustainable future. The need for more women entrepreneurs to develop India is more significant than ever. It's time to break down the barriers that hinder women's entrepreneurship and provide them with the support they need to succeed. By doing so, we can create a more inclusive, diverse, and prosperous society for all. It's time to recognize the potential of women entrepreneurs and empower them to create a brighter future for India.With government initiatives such as the Tanseed and private initiatives like the Homepreneur Awards, women entrepreneurs in Tamil Nadu and India are finally getting the recognition and support they deserve. It's time to celebrate the achievements of these trailblazing women who are breaking down barriers and creating a more inclusive and diverse entrepreneurial ecosystem. As we move forward, let's continue to support and empower women entrepreneurs and build a future where gender equality and economic growth go hand in hand. So let's raise a toast to the inspiring women entrepreneurs of Tamil Nadu and India, and let their success stories inspire the next generation of entrepreneurs!"
  }

  if (loading) return <Loader />


  return (
    <>
      <div className='' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <div className='brand-container my-10 w-full'>
          <p className='text-center text-primary text-[18px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px]'>{CampaignData.title}.</p>
          <div className='flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-between gap-10 w-full'>
            <div className='flex flex-col items-start w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <img className='w-full h-full' src="assets/images/blog/blog1.png" alt="" />
              <p className='text-lg font-bold text-primary my-5 hidden'>{CampaignData.title}</p>
              <p className='text-primary text-justify text-md indent-[10%]'>{CampaignData.content} </p>
            </div>

            <div className='flex flex-col items-center gap-10 w-full md:w-3/5 lg:3/6 xl:w-3/6 '>
              <p className='text-center text-primary text-[18px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[30px] font-bold'>Support This Campaign?</p>
              <form className='w-full flex flex-col gap-5 items-center' onSubmit={handleSubmit(OnSubmit)}>
                <Input error={errors} register={register} validationSchema={{ required: " required" }} inputname={'name'} id={'name'} label={'your name'} placeholder={'type here'} type={'text'} />
                <Input error={errors} register={register} validationSchema={{ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email address" } }} inputname={'email'} id={'mail'} label={'your mail id'} placeholder={'type here'} type={'mail'} />
                <button className='capitalize px-10 py-3 bg-primary rounded-lg text-white'>support</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Blog