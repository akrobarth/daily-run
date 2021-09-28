import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Toggle from "../../components/toggle";
import theme from "../../theme";

import {
  PageContainer,
  InputWrapper,
  InputLabel,
  FormWrapper,
  FormInput,
  ResponWrapper,
  ResultText,
} from "./styled";

const Daily = () => {
  const [goal, setGoal] = useState("");
  const [done, setDone] = useState("");
  const [kmByDay, setKmByDay] = useState("");
  const [shouldBeDone, setShouldBeDone] = useState("");
  const [isKmDone, setIsKmDone] = useState(false);

  const [missingThisYear, setMissingThisYear] = useState("");

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const end = new Date(now.getFullYear(), 0, 365).toString().includes(31)
    ? new Date(now.getFullYear(), 0, 365)
    : new Date(now.getFullYear(), 0, 366);
  const allYear = end - start;
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const yearDay = Math.floor(allYear / oneDay);
  const day = Math.floor(diff / oneDay);
  const dayLeft = Math.floor(yearDay - day);

  const stillHave = Math.floor(goal - done);

  const kmByDayLeft = Math.floor(stillHave / dayLeft);

  useEffect(() => {
    setKmByDay(Math.round((goal / yearDay) * 100) / 100);
  }, [goal]);

  useEffect(() => {
    setShouldBeDone(Math.round(day * kmByDay));
  }, [kmByDay]);

  useEffect(() => {
    setMissingThisYear(shouldBeDone - done);
  }, [shouldBeDone, done]);

  useEffect(() => {
    if (shouldBeDone - done > 0) {
      setMissingThisYear(Math.round(shouldBeDone - done));
      setIsKmDone(false);
    } else {
      setMissingThisYear(Math.round(-(shouldBeDone - done)));
      setIsKmDone(true);
    }
  }, [shouldBeDone, done, isKmDone]);

  const handleChange = () => console.log("in :>> ");

  useEffect(() => {}, [isKmDone]);

  return (
    <PageContainer>
      <FormWrapper>
        <InputWrapper>
          {ThemeProvider}
          <InputLabel>
            GOAL :
            <FormInput
              name="goal"
              type="text"
              placeholder="goal"
              onChange={(e) => setGoal(e.target.value)}
            />
          </InputLabel>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>
            DONE :
            <FormInput
              name="done"
              type="text"
              placeholder="done"
              onChange={(e) => setDone(e.target.value)}
            />
          </InputLabel>
        </InputWrapper>
        <Toggle handleChange={handleChange()} />
      </FormWrapper>
      <ResponWrapper>
        {!!goal && <p>This year Goal is : {goal} km</p>}
        {!!kmByDay && <p>you should do {kmByDay} km by day</p>}
        {!!shouldBeDone && <p>This year should be : {shouldBeDone} km</p>}
        {!!done && <p>This year is : {done} km</p>}
        {!!stillHave && <p>Still have {stillHave} km to do </p>}
        {!!dayLeft && <p>There is {dayLeft} days left this year </p>}
        {!!kmByDayLeft && (
          <p>You Have to do {kmByDayLeft} km by day to reach your goal </p>
        )}
        {!!missingThisYear && (
          <ResultText isKmDone={isKmDone} theme={theme}>
            {isKmDone
              ? `You are ${missingThisYear} km ahead`
              : `You have ${missingThisYear} km missing`}
          </ResultText>
        )}
      </ResponWrapper>
    </PageContainer>
  );
};

export default Daily;
