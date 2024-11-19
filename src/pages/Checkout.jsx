import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CreditCard,
  Package,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { CartContext } from "./Context/Context";
import * as z from "zod";
import { Link } from "react-router-dom";

const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  zipCode: z
    .string()
    .min(5, { message: "ZIP code must be at least 5 characters." }),
});

const paymentInfoSchema = z.object({
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiry date must be in MM/YY format.",
  }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits." }),
});

const formSchema = personalInfoSchema.merge(paymentInfoSchema);

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cart, setCart, updateQuantity } = useContext(CartContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  function onSubmit(values) {
    setIsSubmitting(true);
    values.cart = cart;
    setCart([]);

    // Simulate API call
    setTimeout(() => {
      console.log(values, "values");

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  }

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = total > 100 ? total * 0.1 : 0;
  const finalTotal = total - discount;

  const nextStep = async () => {
    const isValid = await form.trigger([
      "fullName",
      "email",
      "address",
      "city",
      "zipCode",
    ]);
    if (isValid) setStep(2);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/^(\d{2})(\d{2})$/, "$1/$2");
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h1>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-6">
            <div
              className={`flex items-center ${
                step === 1 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div className="w-8 h-8 mr-2 flex items-center justify-center border-2 rounded-full">
                {step > 1 ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Package className="w-5 h-5" />
                )}
              </div>
              <span>Shipping</span>
            </div>
            <div
              className={`flex items-center ${
                step === 2 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div className="w-8 h-8 mr-2 flex items-center justify-center border-2 rounded-full">
                <CreditCard className="w-5 h-5" />
              </div>
              <span>Payment</span>
            </div>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Shipping Information
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...form.register("fullName")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...form.register("email")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St"
                    {...form.register("address")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {form.formState.errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.address.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="New York"
                      {...form.register("city")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {form.formState.errors.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="10001"
                      {...form.register("zipCode")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {form.formState.errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#374151] hover:bg-[#2c3340]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c3340] "
                >
                  Next <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    minLength={19}
                    maxLength={19}
                    {...form.register("cardNumber")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => {
                      const rawValue = e.target.value.replace(/\s/g, "");
                      const formattedValue = formatCardNumber(rawValue);
                      form.setValue("cardNumber", rawValue);
                      e.target.value = formattedValue;
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      minLength={4}
                      maxLength={4}
                      {...form.register("expiryDate")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={(e) => {
                        const rawValue = e.target.value.replace(/\//g, "");
                        const formattedValue = formatExpiryDate(rawValue);
                        form.setValue("expiryDate", rawValue);
                        e.target.value = formattedValue;
                      }}
                    />
                    {form.formState.errors.expiryDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.expiryDate.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      minLength={3}
                      maxLength={4}
                      {...form.register("cvv")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {form.formState.errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.cvv.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#374151] hover:bg-[#2c3340]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Processing
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="inline-block mr-2 w-5 h-5" />
                      Order Placed
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <p className="text-gray-600 mb-4">Review your order details</p>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <div className="flex items-center mt-2">
                  <button
                    className="p-1 bg-gray-200 rounded-full"
                    onClick={() => {
                      updateQuantity(item.id, item.quantity - 1);
                    }}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="p-1 bg-gray-200 rounded-full"
                    onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                    }}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <p className="text-sm text-gray-600 mt-4">
            10% discount applied for orders over $100
          </p>
          <div className="flex justify-between mt-5">
            <span className="font-semibold">Total</span>
            <span>${total.toFixed(0)}</span>
          </div>
          <div className="flex justify-between mt-5">
            <span className="font-semibold">Discount</span>
            <span className={`${discount > 1 && "font-semibold  "}`}>
              ${discount.toFixed(0)}
            </span>
          </div>
          <div className="flex justify-between mt-5 ">
            <span className="font-bold">Final Total</span>
            <span>${finalTotal.toFixed(0)}</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            By placing your order, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
