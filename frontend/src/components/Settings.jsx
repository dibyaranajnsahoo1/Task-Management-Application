import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { IoMailOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { PiPasswordLight } from "react-icons/pi";
import { MdOutlineFiberNew } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { FaPerson } from "react-icons/fa6";
import useSettings from "../hooks/useSettings";

function Settings() {
  const {
    userDetails,
    passwordDetails,
    setPasswordDetails,
    setUserDetails,
    user,
    giveAccess,
    showLoader,
  } = useContext(GlobalState);

  const { handleFormSubmission, handleLogOutAndDelete } = useSettings();

  return (
    giveAccess && (
      <div
  className="flex-grow px-4 sm:px-10 lg:px-28 py-6 h-svh overflow-y-auto"
  id="settings"
>
  <div className="flex flex-col items-center">
    <HiUserCircle size={130} className="text-priority-color mb-4" />
    <h1>Account Settings</h1>

   
    <form
      className="auth-form w-full max-w-xl space-y-5 mt-6"
      onSubmit={(e) => handleFormSubmission(e, "settings", userDetails)}
    >
      <span className="font-roboto font-semibold text-tags-color text-sm uppercase tracking-wide">
        Personal Details
      </span>

     
      <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
        <CiUser size={18} className="thick-stroke text-priority-color" />
        <input
          type="name"
          name="name"
          className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
          placeholder="Enter your name"
          onChange={(e) =>
            setUserDetails((prev) => ({ ...prev, name: e.target.value }))
          }
          defaultValue={user.name}
          required
        />
        <FaCircleCheck fill="green" className="check" />
        <MdCancel size={17} fill="red" className="cross" />
      </div>

   
      <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
        <IoMailOutline size={18} className="text-priority-color" />
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
          placeholder="Enter your email"
          onChange={(e) =>
            setUserDetails((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        <FaCircleCheck fill="green" className="check" />
        <MdCancel size={17} fill="red" className="cross" />
      </div>

     
      <div className="flex flex-col">
        <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
          <FaPerson size={18} className="text-priority-color" />
          <input
            type="text"
            name="status"
            defaultValue={user.status}
            className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
            placeholder="Enter your status"
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          />
          <FaCircleCheck fill="green" className="check" />
          <MdCancel size={17} fill="red" className="cross" />
        </div>
        <span className="text-xs text-tags-color font-lato pl-2 mt-1">
          e.g. student, employee, etc.
        </span>
      </div>

     
      <div className="flex justify-end">
        <button
          type="submit"
          className="form-submit-btn py-2 my-3 px-6 text-sm rounded-lg bg-blue-800 text-white hover:bg-blue-900"
        >
          {showLoader.status && showLoader.feature === "settings" ? (
            <span className="loader"></span>
          ) : (
            "Save Settings"
          )}
        </button>
      </div>
    </form>

   
    <form
      className="auth-form w-full max-w-xl space-y-5 mt-10"
      onSubmit={(e) => handleFormSubmission(e, "password", passwordDetails)}
    >
      <span className="font-roboto font-semibold text-tags-color text-sm uppercase tracking-wide">
        Security Details
      </span>

      <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
        <PiPasswordLight size={18} className="thick-stroke text-priority-color" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          minLength={8}
          autoComplete="current-password"
          onChange={(e) =>
            setPasswordDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
          required
        />
        <FaCircleCheck fill="green" className="check" />
        <MdCancel size={17} fill="red" className="cross" />
      </div>

      <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
        <MdOutlineFiberNew size={20} className="text-priority-color" />
        <input
          type="password"
          name="new password"
          className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
          placeholder="Enter new password"
          minLength={8}
          onChange={(e) =>
            setPasswordDetails((prev) => ({
              ...prev,
              newPassword: e.target.value,
            }))
          }
          required
        />
        <FaCircleCheck fill="green" className="check" />
        <MdCancel size={17} fill="red" className="cross" />
      </div>

      <div className="form-item flex items-center px-4 py-3 border rounded-lg border-border-color space-x-3 text-sm">
        <CiLock size={18} className="thick-stroke text-priority-color" />
        <input
          type="password"
          name="confirm new password"
          className="w-full p-1 px-4 border-l border-priority-color bg-transparent outline-none mode-items"
          placeholder="Confirm new password"
          minLength={8}
          onChange={(e) =>
            setPasswordDetails((prev) => ({
              ...prev,
              passwordConfirm: e.target.value,
            }))
          }
          pattern={passwordDetails.newPassword}
          required
        />
        <FaCircleCheck fill="green" className="check" />
        <MdCancel size={17} fill="red" className="cross" />
      </div>

    
      <div className="flex justify-end">
        <button
          type="submit"
          className="form-submit-btn py-2 my-3 px-6 text-sm rounded-lg bg-blue-800 text-white hover:bg-blue-900"
        >
          {showLoader.status && showLoader.feature === "password" ? (
            <span className="loader"></span>
          ) : (
            "Save Password"
          )}
        </button>
      </div>
    </form>

    
    <div className="flex justify-end w-full max-w-xl space-x-4 mt-6">
      <button
        type="button"
        className="form-submit-btn py-2 px-6 text-sm rounded-lg bg-red-600 text-white hover:bg-red-800"
        onClick={() => handleLogOutAndDelete("delete")}
      >
        {showLoader.status && showLoader.feature === "delete" ? (
          <span className="loader"></span>
        ) : (
          "Delete This Account"
        )}
      </button>
      <button
        type="button"
        className="form-submit-btn py-2 px-6 text-sm rounded-lg bg-red-600 text-white hover:bg-red-800"
        onClick={() => handleLogOutAndDelete("logout")}
      >
        {showLoader.status && showLoader.feature === "logout" ? (
          <span className="loader"></span>
        ) : (
          "Log Out"
        )}
      </button>
    </div>
  </div>
</div>

    )
  );
}

export default Settings;
