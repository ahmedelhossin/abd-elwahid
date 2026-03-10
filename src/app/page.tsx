export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#f6efdf]">
      <section className="relative mx-auto h-full w-full max-w-[720px] bg-[#f6efdf]">
        {/* Top text */}
        <div className="pt-8 text-center sm:pt-10">
          <p className="text-[28px] font-light tracking-[0.18em] text-[#3b2e2e] sm:text-[42px] md:text-[56px]">
            WE ARE
          </p>
          <h1 className="mt-2 text-[42px] font-extrabold leading-none tracking-tight text-[#3b2e2e] sm:text-[64px] md:text-[88px]">
            TEMPORARILY
          </h1>
        </div>

        {/* Closed sign */}
        <div className="relative mx-auto mt-6 w-[92%] max-w-[560px] sm:mt-8 md:mt-10">
          {/* Helmet */}
          <div className="absolute left-1/2 top-[-28px] z-20 h-10 w-16 -translate-x-1/2 rounded-t-full rounded-b-sm border-[3px] border-[#0a5d86] bg-[#0f78aa] sm:top-[-34px] sm:h-12 sm:w-20 md:top-[-42px] md:h-14 md:w-24" />
          <div className="absolute left-1/2 top-[-10px] z-20 h-2 w-16 -translate-x-1/2 bg-[#0a5d86] sm:top-[-12px] sm:w-20 md:top-[-18px] md:h-3 md:w-24" />

          {/* Sign frame */}
          <div className="relative z-10 rounded-xl border-[6px] border-[#1c2333] bg-[#f7c928] p-2 shadow-lg sm:rounded-2xl sm:border-[8px] sm:p-3 md:border-[10px] md:p-4">
            <div className="rounded-lg border-[5px] border-dashed border-[#1c2333] bg-[#ffd633] px-3 py-6 text-center sm:rounded-xl sm:border-[6px] sm:px-4 sm:py-8 md:border-[8px] md:px-4 md:py-10">
              <span className="text-[34px] font-extrabold tracking-wide text-[#2b1f1f] sm:text-[50px] md:text-[78px]">
                CLOSED
              </span>
            </div>
          </div>

          {/* Poles */}
          <div className="mx-auto flex w-[72%] justify-between px-6 sm:px-8 md:px-10">
            <div className="h-24 w-2 bg-[#4b4d63] sm:h-32 sm:w-3 md:h-44 md:w-4" />
            <div className="h-24 w-2 bg-[#4b4d63] sm:h-32 sm:w-3 md:h-44 md:w-4" />
            <div className="h-24 w-2 bg-[#4b4d63] sm:h-32 sm:w-3 md:h-44 md:w-4" />
          </div>
        </div>

        {/* Bottom construction area */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-1.5 w-full bg-[#d8c9a7] sm:h-2" />

          <div className="relative h-[140px] sm:h-[170px] md:h-[220px]">
            {/* Left cones */}
            <div className="absolute bottom-2 left-2 text-lg sm:left-4 sm:text-2xl md:text-3xl">
              🚧
            </div>
            <div className="absolute bottom-2 left-10 text-lg sm:left-14 sm:text-2xl md:text-3xl">
              🚧
            </div>

            {/* Left machine */}
            <div className="absolute bottom-0 left-8 text-[44px] leading-none sm:left-14 sm:text-[62px] md:left-20 md:text-[90px]">
              🚜
            </div>

            {/* Truck */}
            <div className="absolute bottom-0 left-24 text-[58px] leading-none sm:left-36 sm:text-[78px] md:left-44 md:text-[110px]">
              🚚
            </div>

            {/* Center cone */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg sm:text-2xl md:text-3xl">
              🚧
            </div>

            {/* Cement truck */}
            <div className="absolute bottom-0 right-20 text-[54px] leading-none sm:right-28 sm:text-[70px] md:right-36 md:text-[95px]">
              🚛
            </div>

            {/* Crane */}
            <div className="absolute bottom-6 right-1 text-[80px] leading-none sm:right-3 sm:bottom-8 sm:text-[110px] md:right-6 md:bottom-12 md:text-[150px]">
              🏗️
            </div>

            {/* Right truck */}
            <div className="absolute bottom-0 right-0 text-[56px] leading-none sm:text-[76px] md:text-[105px]">
              🚚
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}