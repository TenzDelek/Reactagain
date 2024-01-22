//...props is for any aditional passes that a user has send
const Button = ({children,type="button",
bgColor='bg-blue-600',textColor='text-white',
className='',...props
}) => {
  return (
   <button className={` px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} 
   {...props}>
    {children}
   </button>
  )
}

export default Button