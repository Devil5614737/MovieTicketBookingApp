import { useContext, useEffect, useState } from "react";
import { Box, Button, Link, Text, useDisclosure } from "@chakra-ui/react";
import { MoviesContext } from "../context/MoviesContext";
import { MoviesContextI } from "../interface/movies";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import data from "../data/seats";
import { CheckoutModal } from "../Modals/CheckoutModal";

interface seatsI {
  seat: number;
  selected?: boolean;
}

interface SeatsI {
  id: number;
  row: string;
  seats: seatsI[];
}
interface TimesI {
  id: number;
  time: string;
  checked?: boolean;
}

function SelectSeat() {
  const { selectedSeat, specificMovie } =
    useContext<MoviesContextI>(MoviesContext);
  const navigate = useNavigate();
  const [seats, setSeats] = useState<any>(data.seats);
  let [seatCount, setSeatCount] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timings, setTimings] = useState<TimesI[]>(data.time);
  const [selectedTime, setSelectedTime] = useState<string|any>();

  useEffect(() => {
    if (!selectedSeat || !specificMovie) {
      navigate("/");
    }
  }, []);

  const bookSeats = (id: number) => {
    if(!selectedTime) return alert('select time first')
    setSeatCount(seatCount + 1);
    const checked = seats.map((seat: any) =>
      seat.id === id
        ? {
            ...seat,
            checked:
              seatCount < selectedSeat
                ? !seat.checked
                : alert(`only ${selectedSeat} seats are allowed`)
          }
        : seat
    );

    setSeats(checked);
  };

  const handleSelectTime = (item: any,time:string) => {
    const times = [...timings];
    const index = times.indexOf(item);
    times[index] = { ...times[index] };
    times[index].checked = !times[index].checked;
    setTimings(times);
    setSelectedTime(time);
  };



  return (
    <>
      <Box
        bg="#F7F9FC"
        p={4}
        pl={10}
        pr={10}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <IoIosArrowBack />
          <Link onClick={() => navigate(-1)} fontWeight={500} fontSize="xl">
            {specificMovie && specificMovie.title}
          </Link>
        </Box>
        <Link border="1px solid #dbdbdb" px={5} py={1}>
          {selectedSeat && selectedSeat} Tickets
        </Link>
      </Box>
      <Box   p={4}
      pl={10}
      pr={10} my={2}>
        {timings.map((item) => (
          <Button
            disabled={selectedTime}
            className="btn"
            onClick={() => handleSelectTime(item,item.time)}
            bg={item.checked ? "#6366F1" : "#E2E8F0"}
            color={item.checked ? "#fff" : "#111"}
            mr={2}
            key={item.id}
          >
            {item.time}
          </Button>
        ))}
      </Box>
      <Box display="grid" placeItems="center">
        <Box display="grid" gridTemplateColumns={"repeat(5, 1fr)"} gap={5}>
          {seats.map((seat: any) => (
            <Button
              disabled={seatCount > selectedSeat}
              bg={seat.checked ? "green" : "white"}
              cursor={"pointer"}
              onClick={() => bookSeats(seat.id)}
              key={seat.id}
              w={19}
              h={19}
              border="1px solid black"
            ></Button>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={12}
        gap={6}
      >
        {data.seatTypes.map((item) => (
          <Box key={item.title} display="flex" alignItems="center">
            <Box bg={item.color} mr={2} width={5} height={5}></Box>
            <Text>{item.title}</Text>
          </Box>
        ))}
      </Box>
      <Button
      disabled={!selectedTime}
        onClick={onOpen}
        bg="#6366F1"
        color="white"
        display="block"
        m="auto"
      >
        Buy Now
      </Button>
      <CheckoutModal onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default SelectSeat;
