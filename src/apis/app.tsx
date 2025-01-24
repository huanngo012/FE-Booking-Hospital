import AxiosDefaults from "axios";

export const apiGetProvinces = () =>
  AxiosDefaults({
    url: `http://vapi.vnappmob.com/api/province`,
    method: "get",
  });
export const apiGetDistrics = (id: any) =>
  AxiosDefaults({
    url: `http://vapi.vnappmob.com/api/province/district/${id}`,
    method: "get",
  });
export const apiGetWards = (id: any) =>
  AxiosDefaults({
    url: `http://vapi.vnappmob.com/api/province/ward/${id}`,
    method: "get",
  });
