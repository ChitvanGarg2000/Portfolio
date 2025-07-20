import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import navigations from '../data/navigations'


interface ContactFormProps {
    isLoading: boolean, setLoading: (isLoading: boolean) => void, mailError: string, setMailError: (mailError: string) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ isLoading, setLoading, mailError, setMailError }) => {
    const [formData, setFormData] = useState({
        email: "",
        description: "",
        profile: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        description: "",
        profile: "",
    });

    const validate = () => {
        let valid = true;
        const newErrors = { email: "", description: "", profile: "" };

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }

        if (!formData.description || formData.description.length < 10) {
            newErrors.description = "Description must be at least 10 characters.";
            valid = false;
        }

        if (!formData.profile) {
            newErrors.profile = "Please select a job role.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            try {
                setLoading(true)
                const response = await fetch('/api/send-info', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })


                if (response.ok) {
                    const { data } = await response.json();
                    if (data) {
                        setLoading(false)
                    }
                }
                setLoading(false);
                setMailError("Unable to send Mail")
            } catch (error) {
                setLoading(false);
                setMailError("Something went wrong")
                console.error("Error submitting phrase:", error);
            }
        }

    }, [formData]);


    return (
        <>
            <h2 className="text-black text-2xl mb-4">Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="desc">Description</Label>
                        <Textarea
                            id="desc"
                            placeholder="Job Description"
                            name="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                        {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="profile">Job Role:</Label>
                        <Select
                            name="profile"
                            onValueChange={(value) => setFormData({ ...formData, profile: value })}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Software Developer" />
                            </SelectTrigger>
                            <SelectContent>
                                {navigations.profiles.map((profile) => (
                                    <SelectItem value={profile} key={profile}>{profile}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.profile && <p className="text-sm text-red-500">{errors.profile}</p>}
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" className="mt-6">
                        Send
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
