/* eslint-disable react/prop-types */
const CouponCard = ({ coupon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{coupon.code}</h3>
    <p className="text-gray-600 mb-4">{coupon.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-indigo-600">
        {coupon.discount}
      </span>
      <span className="text-sm text-gray-500">
        Expires: {coupon.expiryDate}
      </span>
    </div>
  </div>
);

const Promotions = () => {
  const coupons = [
    {
      id: 1,
      code: "SUMMER2023",
      description: "Summer sale discount",
      discount: "20% OFF",
      expiryDate: "2023-08-31",
    },
    {
      id: 2,
      code: "FREESHIP",
      description: "Free shipping on orders over $50",
      discount: "FREE SHIPPING",
      expiryDate: "2023-12-31",
    },
    {
      id: 3,
      code: "NEWCUSTOMER",
      description: "New customer discount",
      discount: "15% OFF",
      expiryDate: "2023-07-31",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Promotions and Discounts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </div>
  );
};

export default Promotions;

// High level progamming Languages (easy to understand by humans)
// Low level progamming Languages (close to machine)
// Assembly Languages (close to machine)
// Machine Languages/binary language (0s and 1s)

// High level progamming Languages
// console.log("Hello world");

// Assembly Languages
// section .data
//     hello db 'Hello world',0

// section .text
//     global _start

// _start:
//     ; write our string to stdout
//     mov eax, 4            ; syscall number for sys_write
//     mov ebx, 1            ; file descriptor 1 is stdout
//     mov ecx, hello        ; pointer to our hello world string
//     mov edx, 12           ; length of our string
//     int 0x80              ; call the kernel

//     ; exit
//     mov eax, 1            ; syscall number for sys_exit
//     xor ebx, ebx          ; exit code 0
//     int 0x80              ; call the kernel

// // Low level progamming Languages
//  #include <stdio.h>

// int main() {
//     printf("Hello world\n");
//     return 0;
// }

// 48656c6c6f20776f726c640a
