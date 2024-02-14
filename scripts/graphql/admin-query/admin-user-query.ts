import { gql } from "@apollo/client";

export const ADMIN_USER_QUERY = gql`
  query ($page: Int) {
    user_infos(page: $page) {
      question_1
      question_2
      question_3
      question_4
      question_5
      question_6
      question_7
      question_8
      question_9
      government_id
      government_id_1
      government_id_2
      username
    }
  }
`;
