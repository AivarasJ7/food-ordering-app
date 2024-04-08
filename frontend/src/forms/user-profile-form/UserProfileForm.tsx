import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  adressLine1: z.string().min(1, "AdressLine1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const userProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
            <h2 className="text-2xl font-bold"> User Profile Form</h2>
            <FormDescription>
                View and change your profile information here
            </FormDescription>
        </div>
        <FormField control={form.control} name="email" render={({field})=>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input {...field} disabled className="bg-white" />
                </FormControl>
            </FormItem>
        )}/>
      </form>
    </Form>
  );
};

export default userProfileForm;
