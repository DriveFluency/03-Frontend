import { IBooking } from "@/components/stepperBooking";


  class BookingService {
    static getBookings(): IBooking[] {
      const bookings = localStorage.getItem('bookings');
      return bookings ? JSON.parse(bookings) : [];
    }
  
    static addBooking(booking: IBooking): void {
      const bookings = BookingService.getBookings();
      bookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  
    static updateBooking(updatedBooking: IBooking): void {
      let bookings = BookingService.getBookings();
        bookings = bookings.map(booking => booking.id === updatedBooking.id ? updatedBooking : booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  
    static deleteBooking(bookingId: string): void {
      const bookings = BookingService.getBookings().filter(booking => booking.id !== bookingId);
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  
    static getBookingById(bookingId: string): IBooking | undefined {
      const bookings = BookingService.getBookings();
      return bookings.find(booking => booking.id === bookingId);
    }
  }

  export default BookingService;