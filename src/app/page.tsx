// app/excel/page.tsx
"use client";

export default function ExcelEmbed() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        //  src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2&wdAllowInteractivity=True&wdHideGridlines=False&wdHideHeaders=True&wdDownloadButton=True"
        //  src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
        // src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2&wdAllowInteractivity=False&Item=Revolution!Print_Area&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
        src="https://1drv.ms/x/c/39d1075bbf486347/IQQvSVgy3qJpTqQr9CysU9EQAXxPU8bgnXHdlattf_I_fDA?em=2&AllowTyping=True&Item='Revolution'!A1%3AAT120&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      />
    </div>
  );
}

//<iframe width="700" height="900" frameborder="0" scrolling="no" src="https://1drv.ms/x/c/39d1075bbf486347/IQQvSVgy3qJpTqQr9CysU9EQAXxPU8bgnXHdlattf_I_fDA?em=2&AllowTyping=True&Item='Revolution'!A1%3AAT120&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>

//<iframe width="700" height="900" frameborder="0" scrolling="no" src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2&wdAllowInteractivity=False&Item=Revolution!Print_Area&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>

//<iframe width="402" height="346" frameborder="0" scrolling="no" src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>

// import dynamic from "next/dynamic";

// const ExcelFrame = dynamic(
//   () =>
//     Promise.resolve(() => (
//       <iframe
//         src="https://1drv.ms/x/c/ea2c778fffa10251/IQQVjVRAs36ZSo5GcckwVqVMAWt1cO_pOZuyZePaHWQXvDY?em=2"
//         style={{ width: "100%", height: "100vh", border: "none" }}
//       />
//     )),
//   { ssr: false }
// );

// export default function Page() {
//   return <ExcelFrame />;
// }
