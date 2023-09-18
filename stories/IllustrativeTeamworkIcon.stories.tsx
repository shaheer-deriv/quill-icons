import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeTeamworkIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeTeamworkIcon',
  component: IllustrativeTeamworkIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeTeamworkIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeTeamworkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
