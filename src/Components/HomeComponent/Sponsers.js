import Slidercommon from '../../Element/Slidercommon'
import Titlenew from '../../Element/Titlenew'
import { motion } from 'framer-motion'


function Sponsers(props) {

  const reverse = 'flex-col  md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse';
  const noreverse = 'flex-col md:flex-row lg:flex-row xl:flex-row'




  return (
    <>
      <div id='Sponsors' className='brand-container py-10' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <div className={`flex gap-5 justify-between items-center  ${props.reverse ? reverse : noreverse} ${props.oldDesign ? '' : 'hidden'}`}>
          <Titlenew title={props.title} />
          <div className='w-full md:w-3/5 lg:w-4/2 xl:w-4/5'>
            <Slidercommon data={props.partners} />
          </div>


        </div>
        <div className={`${props.oldDesign ? 'hidden' : ''}`}>
          <div className='text-center'>
            <Titlenew title={props.title} />
          </div>

          <div>
            {props.NewData.map((item, index) =>
              <div className='my-11'>
                <p className='text-center capitalize text-2xl text-primary font-bold '>{item.title}</p>
                <div className='flex w-full justify-center gap-10 flex-wrap'>
                  {item.icons.map((list, index) =>
                    <motion.img className='hover:scale-125  mt-2 w-[300px] object-contain  transition-all duration-300 cursor-pointer' src={list.img} alt="" />
                  )}
                </div>
              </div>

            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default Sponsers


