import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  country: z.string().min(2, 'Country is required'),
  city: z.string().min(2, 'City is required'),
  education: z.string().min(1, 'Education level is required'),
  course: z.string().min(1, 'Preferred course is required'),
  employment: z.string().min(1, 'Employment status is required'),
  motivation: z.string().min(10, 'Please tell us why you want to join (min 10 chars)'),
});

type FormData = z.infer<typeof formSchema>;

export default function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="registration" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join thousands of successful graduates working with top international companies. Secure your spot in our next cohort.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Fill the form</h4>
                  <p className="text-blue-200">Provide your details to register your interest.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Choose a package</h4>
                  <p className="text-blue-200">Select a training package that fits your goals.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Start learning</h4>
                  <p className="text-blue-200">Get instant access to your courses and mentors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white text-foreground rounded-3xl p-8 md:p-10 shadow-2xl">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-5xl" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Registration Successful!</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Thank you for applying. Our admissions team will contact you shortly with the next steps.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  Register Another Person
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 border-b pb-4">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      {...register('fullName')} 
                      className={`w-full p-3 rounded-lg border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      {...register('email')} 
                      className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      {...register('phone')} 
                      className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      {...register('dob')} 
                      className={`w-full p-3 rounded-lg border ${errors.dob ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    />
                    {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <input 
                      type="text" 
                      {...register('country')} 
                      className={`w-full p-3 rounded-lg border ${errors.country ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="e.g. Nigeria"
                    />
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input 
                      type="text" 
                      {...register('city')} 
                      className={`w-full p-3 rounded-lg border ${errors.city ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="e.g. Lagos"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <select 
                      {...register('gender')} 
                      className={`w-full p-3 rounded-lg border ${errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Highest Education Level</label>
                    <select 
                      {...register('education')} 
                      className={`w-full p-3 rounded-lg border ${errors.education ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    >
                      <option value="">Select Education</option>
                      <option value="Secondary">Secondary School</option>
                      <option value="Diploma">Diploma / OND</option>
                      <option value="Bachelors">Bachelor's Degree</option>
                      <option value="Masters">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                    {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Course</label>
                    <select 
                      {...register('course')} 
                      className={`w-full p-3 rounded-lg border ${errors.course ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    >
                      <option value="">Select a Course</option>
                      <option value="VA">Virtual Assistant</option>
                      <option value="CS">Customer Support</option>
                      <option value="DM">Digital Marketing</option>
                      <option value="DE">Data Entry</option>
                      <option value="SMM">Social Media Management</option>
                      <option value="EM">Email Management</option>
                      <option value="MO">Microsoft Office</option>
                      <option value="GW">Google Workspace</option>
                      <option value="COM">Communication Skills</option>
                      <option value="INT">Interview Skills</option>
                      <option value="ENG">Professional English</option>
                      <option value="FRE">Freelancing Fundamentals</option>
                    </select>
                    {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Employment Status</label>
                    <select 
                      {...register('employment')} 
                      className={`w-full p-3 rounded-lg border ${errors.employment ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                    >
                      <option value="">Select Status</option>
                      <option value="Employed">Employed</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Student">Student</option>
                      <option value="Self-employed">Self-employed</option>
                    </select>
                    {errors.employment && <p className="text-red-500 text-xs mt-1">{errors.employment.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to join?</label>
                  <textarea 
                    {...register('motivation')} 
                    rows={4}
                    className={`w-full p-3 rounded-lg border ${errors.motivation ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none`}
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                  {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Submitting Application...
                    </>
                  ) : 'Submit Application'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
