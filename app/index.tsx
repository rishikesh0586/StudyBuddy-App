import useUser from "@/hooks/auth/useUser";
import { Redirect } from "expo-router";
import Loader from "@/components/loader/Loader";

export default function TabsIndex() {
  const { loading, user } = useUser();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Redirect href={!user ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
