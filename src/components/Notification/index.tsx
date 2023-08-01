import { NOTIFICATION_INFO } from "@/constants";

const Notification = () => {
  const notificationContent = NOTIFICATION_INFO;
  return (
    <div className="h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer">
      {notificationContent}
    </div>
  );
};
export default Notification;
