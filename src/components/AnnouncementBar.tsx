const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange via-orange-light to-yellow py-3 px-4 text-center sticky top-0 z-50">
      <p className="text-sm md:text-base font-semibold text-background">
        Drop Going LIVE on <span className="font-bold">28th November!</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
