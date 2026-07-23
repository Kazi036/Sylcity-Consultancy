"use client"

import { useEffect, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"




//===================================
// CONTACT DETAILS
//===================================

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+8801345-155171",
  },

  {
    icon: Mail,
    label: "Email",
    value: "sylcityinfo@gmail.com",
  },

  {
    icon: MapPin,
    label: "Office",
    value:
      "Rang Mohol Tower 4th Floor (Lift 3rd), Bandar Bazar, Sylhet, Bangladesh, 3100",
  },
]




//===================================
// SERVICES LIST
//===================================

const services = [
  "Travel Agency",

  "Education Consultancy",

  "Student Visa",

  "Visit Visa",

  "Air Ticket Booking",

  "Passport Services",

  "Document Processing",

  "Other",
]

<<<<<<< HEAD



//===================================
// COMPONENT START
//===================================

export function Contact() {


  // SUCCESS STATE

  const [submitted, setSubmitted] = useState(false)
  


  // LOADING STATE

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")


  // INPUT STATES

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [phone, setPhone] = useState("")

  const [service, setService] = useState("")

  const [message, setMessage] = useState("")





  // VALIDATION STATES


  const [emailValid, setEmailValid] = useState(false)

  const [phoneValid, setPhoneValid] = useState(false)

  const [messageValid, setMessageValid] = useState(false)





  //===================================
  // PHONE VALIDATION
  //===================================


  const validatePhone = (number: string) => {

    const regex = /^(013|014|015|016|017|018|019)\d{8}$/

    return regex.test(number)

  }




  //===================================
  // EMAIL VALIDATION
  //===================================


  const validateEmail = (email: string) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email)

  }




  //===================================
  // MESSAGE VALIDATION
  //===================================


  const validateMessage = (text: string) => {

    return text.trim().length >= 10

  }




  //===================================
  // REAL TIME VALIDATION
  //===================================


  useEffect(() => {

    setPhoneValid(

      validatePhone(phone)

    )

  }, [phone])





  useEffect(() => {

    setEmailValid(

      validateEmail(email)

    )

  }, [email])





  useEffect(() => {

    setMessageValid(

      validateMessage(message)

    )

  }, [message])
  //===================================
  // AUTO RESET SUCCESS PAGE
  //===================================


  useEffect(() => {

    if (submitted) {

      const timer = setTimeout(() => {

        setSubmitted(false)

        setName("")
        setEmail("")
        setPhone("")
        setService("")
        setMessage("")

      }, 10000)


      return () => clearTimeout(timer)

    }

  }, [submitted])




  //===================================
  // HANDLE SUBMIT
  //===================================

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,      
          email,
          phone,
          service,
          message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitted(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }




  //===================================
  // RETURN START
  //===================================



  return (

    <section

      id="contact"

      className="border-b border-border bg-background"

    >


      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">


        <div className="grid gap-12 lg:grid-cols-2">



          {/* LEFT SIDE */}



          <div>


            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">

              Contact Us

            </p>



            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">

              Let's plan your next step together

            </h2>



            <p className="mt-4 leading-relaxed text-muted-foreground">

              Reach out for a FREE consultation.

              Our consultant will contact you
              within one business day.

            </p>




            <ul className="mt-8 space-y-5">


              {contactDetails.map((detail) => (


                <li

                  key={detail.label}

                  className="flex items-center gap-4"

                >


                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">


                    <detail.icon
                      className="h-5 w-5"
                    />


                  </span>



                  <div>

                    <p className="text-xs uppercase tracking-wider text-muted-foreground">

                      {detail.label}

                    </p>


                    <p className="font-medium">

                      {detail.value}

                    </p>


                  </div>


                </li>


              ))}



            </ul>



          </div>




          {/* RIGHT SIDE */}



          <div className="rounded-xl border border-border bg-card p-6 md:p-8">


            {submitted ? (



              <div className="flex h-full flex-col items-center justify-center gap-5 py-10 text-center">



                <CheckCircle2

                  className="h-20 w-20 text-green-600"

                />



                <h3 className="text-2xl font-bold text-green-600">

                  Request Submitted Successfully

                </h3>



                <p className="leading-relaxed text-muted-foreground">

                  Thank you for choosing
                  Sylcity Consultancy.


                  <br />

                  Our consultant will contact
                  you within next 1 Hour.


                  <br />

                  Please keep your phone active.


                </p>



                <p className="text-sm text-muted-foreground">

                  This page will automatically
                  reset in 10 seconds.

                </p>



              </div>



            ) : (


              <form

                onSubmit={handleSubmit}

                className="flex flex-col gap-5"

              >
                {/* NAME + EMAIL */}


                <div className="grid gap-5 sm:grid-cols-2">


                  {/* FULL NAME */}


                  <div className="flex flex-col gap-2">

                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >

                      Full Name *

                    </label>


                    <input

                      id="name"

                      name="name"

                      required

                      value={name}

                      onChange={(e) => setName(e.target.value)}

                      placeholder="Kazi"

                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

                    />


                  </div>




                  {/* EMAIL */}



                  <div className="flex flex-col gap-2">


                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >

                      Email Address *

                    </label>



                    <input

                      id="email"

                      name="email"

                      type="email"

                      required

                      value={email}

                      onChange={(e) => setEmail(e.target.value)}

                      placeholder="example@gmail.com"

                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

                    />




                    {

                      email.length > 0 && (

                        emailValid ? (

                          <p className="text-sm font-medium text-green-600">

                            ✓ Valid Email Address

                          </p>

                        ) : (

                          <p className="text-sm font-medium text-red-600">

                            Invalid Email Address

                          </p>

                        )

                      )

                    }



                  </div>



                  {/* PHONE NUMBER */}



                  <div className="flex flex-col gap-2">


                    <label
                      htmlFor="phone"
                      className="text-sm font-medium"
                    >

                      Phone Number *

                    </label>



                    <input

                      id="phone"

                      name="phone"

                      type="tel"

                      required

                      maxLength={11}

                      value={phone}

                      onChange={(e) => setPhone(e.target.value)}

                      placeholder="01712345678"

                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

                    />




                    {

                      phone.length > 0 && (

                        phoneValid ? (

                          <p className="text-sm font-medium text-green-600">

                            ✓ Valid Bangladesh Phone Number

                          </p>

                        ) : (

                          <p className="text-sm font-medium text-red-600">

                            Invalid Phone Number

                          </p>

                        )

                      )

                    }



                  </div>




                  {/* SERVICE */}



                  <div className="flex flex-col gap-2">


                    <label
                      htmlFor="service"
                      className="text-sm font-medium"
                    >

                      Service Needed *

                    </label>



                    <select

                    name="service"


                      required

                      value={service}

                      onChange={(e) => setService(e.target.value)}

                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

                    >


                      <option value="">

                        Select a Service

                      </option>


                      {services.map((item) => (

                        <option

                          key={item}

                          value={item}

                        >

                          {item}

                        </option>

                      ))}


                    </select>



                  </div>



                </div>




                {/* MESSAGE */}



                <div className="flex flex-col gap-2">


                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                  >

                    Message *

                  </label>



                  <textarea
                  name="message"

                    required

                    rows={5}

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                    placeholder="Tell us how we can help you....."

                    className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

                  />



                  {

                    message.length > 0 && (

                      messageValid ? (

                        <p className="text-sm font-medium text-green-600">

                          ✓ Message looks good.

                        </p>

                      ) : (

                        <p className="text-sm font-medium text-red-600">

                          Message must contain at least 10 characters.

                        </p>

                      )

                    )

                  }


                </div>
                {/* SUBMIT BUTTON */}


                <Button

                  type="submit"

                  size="lg"

                  disabled={

                    loading ||

                    !phoneValid ||

                    !emailValid ||

                    !messageValid ||

                    service === ""

                  }

                  className="w-full"

                >


                  {loading ? (

                    <div className="flex items-center gap-2">


                      <Loader2
                        className="h-5 w-5 animate-spin"
                      />


                      Submitting.....


                    </div>


                  ) : (


                    "Send Request"


                  )}


                </Button>




                {/* TERMS */}



                <p className="text-center text-xs leading-relaxed text-muted-foreground">


                  By submitting this form, you agree
                  to be contacted by Sylcity Consultancy
                  regarding your enquiry.


                </p>





              </form>



            )}


          </div>



        </div>



      </div>



    </section>


  )
=======



//===================================
// COMPONENT START
//===================================

export function Contact() {


// SUCCESS STATE

const [submitted,setSubmitted] = useState(false)


// LOADING STATE

const [loading,setLoading] = useState(false)




// INPUT STATES

const [name,setName] = useState("")

const [email,setEmail] = useState("")

const [phone,setPhone] = useState("")

const [service,setService] = useState("")

const [message,setMessage] = useState("")





// VALIDATION STATES


const [emailValid,setEmailValid] = useState(false)

const [phoneValid,setPhoneValid] = useState(false)

const [messageValid,setMessageValid] = useState(false)





//===================================
// PHONE VALIDATION
//===================================


const validatePhone = (number:string)=>{

const regex = /^(013|014|015|016|017|018|019)\d{8}$/

return regex.test(number)

}




//===================================
// EMAIL VALIDATION
//===================================


const validateEmail = (email:string)=>{

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

return regex.test(email)

}




//===================================
// MESSAGE VALIDATION
//===================================


const validateMessage = (text:string)=>{

return text.trim().length >=10

}




//===================================
// REAL TIME VALIDATION
//===================================


useEffect(()=>{

setPhoneValid(

validatePhone(phone)

)

},[phone])





useEffect(()=>{

setEmailValid(

validateEmail(email)

)

},[email])





useEffect(()=>{

setMessageValid(

validateMessage(message)

)

},[message])
//===================================
// AUTO RESET SUCCESS PAGE
//===================================


useEffect(()=>{

  if(submitted){
  
  const timer = setTimeout(()=>{
  
  setSubmitted(false)
  
  setName("")
  setEmail("")
  setPhone("")
  setService("")
  setMessage("")
  
  },10000)
  
  
  return ()=> clearTimeout(timer)
  
  }
  
  },[submitted])
  
  
  
  
  //===================================
  // HANDLE SUBMIT
  //===================================
  
  
  async function handleSubmit(
  
  e:React.FormEvent<HTMLFormElement>
  
  ){
  
  e.preventDefault()
  
  
  
  // FORM VALIDATION
  
  
  if(
  
  !phoneValid ||
  
  !emailValid ||
  
  !messageValid ||
  
  service===""
  
  ){
  
  return
  
  }
  
  
  
  // LOADING START
  
  
  setLoading(true)
  
  
  
  // FUTURE BACKEND API
  
  
  setTimeout(()=>{
  
  
  setLoading(false)
  
  setSubmitted(true)
  
  
  },2000)
  
  
  
  }
  
  
  
  
  //===================================
  // RETURN START
  //===================================
  
  
  
  return(
  
  <section
  
  id="contact"
  
  className="border-b border-border bg-background"
  
  >
  
  
  <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
  
  
  <div className="grid gap-12 lg:grid-cols-2">
  
  
  
  {/* LEFT SIDE */}
  
  
  
  <div>
  
  
  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
  
  Contact Us
  
  </p>
  
  
  
  <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">
  
  Let's plan your next step together
  
  </h2>
  
  
  
  <p className="mt-4 leading-relaxed text-muted-foreground">
  
  Reach out for a FREE consultation.
  
  Our consultant will contact you
  within one business day.
  
  </p>
  
  
  
  
  <ul className="mt-8 space-y-5">
  
  
  {contactDetails.map((detail)=>(
  
  
  <li
  
  key={detail.label}
  
  className="flex items-center gap-4"
  
  >
  
  
  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
  
  
  <detail.icon
  className="h-5 w-5"
  />
  
  
  </span>
  
  
  
  <div>
  
  <p className="text-xs uppercase tracking-wider text-muted-foreground">
  
  {detail.label}
  
  </p>
  
  
  <p className="font-medium">
  
  {detail.value}
  
  </p>
  
  
  </div>
  
  
  </li>
  
  
  ))}
  
  
  
  </ul>
  
  
  
  </div>
  
  
  
  
  {/* RIGHT SIDE */}
  
  
  
  <div className="rounded-xl border border-border bg-card p-6 md:p-8">
  
  
  {submitted ? (
  
  
  
  <div className="flex h-full flex-col items-center justify-center gap-5 py-10 text-center">
  
  
  
  <CheckCircle2
  
  className="h-20 w-20 text-green-600"
  
  />
  
  
  
  <h3 className="text-2xl font-bold text-green-600">
  
  Request Submitted Successfully
  
  </h3>
  
  
  
  <p className="leading-relaxed text-muted-foreground">
  
  Thank you for choosing
  Sylcity Consultancy.
  
  
  <br/>
  
  Our consultant will contact
  you within next 1 Hour.
  
  
  <br/>
  
  Please keep your phone active.
  
  
  </p>
  
  
  
  <p className="text-sm text-muted-foreground">
  
  This page will automatically
  reset in 10 seconds.
  
  </p>
  
  
  
  </div>
  
  
  
  ):(
  
  
  <form
  
  onSubmit={handleSubmit}
  
  className="flex flex-col gap-5"
  
  >
{/* NAME + EMAIL */}


<div className="grid gap-5 sm:grid-cols-2">


{/* FULL NAME */}


<div className="flex flex-col gap-2">

<label
htmlFor="name"
className="text-sm font-medium"
>

Full Name *

</label>


<input

id="name"

name="name"

required

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Kazi"

className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

/>


</div>




{/* EMAIL */}



<div className="flex flex-col gap-2">


<label
htmlFor="email"
className="text-sm font-medium"
>

Email Address *

</label>



<input

id="email"

name="email"

type="email"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="example@gmail.com"

className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

/>




{

email.length>0 &&(

emailValid ?(

<p className="text-sm font-medium text-green-600">

✓ Valid Email Address

</p>

):(

<p className="text-sm font-medium text-red-600">

Invalid Email Address

</p>

)

)

}



</div>



{/* PHONE NUMBER */}



<div className="flex flex-col gap-2">


<label
htmlFor="phone"
className="text-sm font-medium"
>

Phone Number *

</label>



<input

id="phone"

name="phone"

type="tel"

required

maxLength={11}

value={phone}

onChange={(e)=>setPhone(e.target.value)}

placeholder="01712345678"

className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

/>




{

phone.length>0 &&(

phoneValid ?(

<p className="text-sm font-medium text-green-600">

✓ Valid Bangladesh Phone Number

</p>

):(

<p className="text-sm font-medium text-red-600">

Invalid Phone Number

</p>

)

)

}



</div>




{/* SERVICE */}



<div className="flex flex-col gap-2">


<label
htmlFor="service"
className="text-sm font-medium"
>

Service Needed *

</label>



<select

required

value={service}

onChange={(e)=>setService(e.target.value)}

className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

>


<option value="">

Select a Service

</option>


{services.map((item)=>(

<option

key={item}

value={item}

>

{item}

</option>

))}


</select>



</div>



</div>




{/* MESSAGE */}



<div className="flex flex-col gap-2">


<label
htmlFor="message"
className="text-sm font-medium"
>

Message *

</label>



<textarea

required

rows={5}

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Tell us how we can help you....."

className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"

/>



{

message.length>0 &&(

messageValid ?(

<p className="text-sm font-medium text-green-600">

✓ Message looks good.

</p>

):(

<p className="text-sm font-medium text-red-600">

Message must contain at least 10 characters.

</p>

)

)

}


</div>
{/* SUBMIT BUTTON */}


<Button

type="submit"

size="lg"

disabled={

loading ||

!phoneValid ||

!emailValid ||

!messageValid ||

service===""

}

className="w-full"

>


{loading ?(

<div className="flex items-center gap-2">


<Loader2
className="h-5 w-5 animate-spin"
/>


Submitting.....


</div>


):(


"Send Request"


)}


</Button>




{/* TERMS */}



<p className="text-center text-xs leading-relaxed text-muted-foreground">


By submitting this form, you agree
to be contacted by Sylcity Consultancy
regarding your enquiry.


</p>





</form>



)}


</div>



</div>



</div>



</section>


)

>>>>>>> 69ffa4495d117dbac1adff6042d9570314fd8fe8
}

