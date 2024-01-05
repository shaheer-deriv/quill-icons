import type { Meta, StoryObj } from '@storybook/react';

import { LightHighLeverageIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightHighLeverageIcon',
  component: LightHighLeverageIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightHighLeverageIcon>;

export default meta;

type Story = StoryObj<typeof LightHighLeverageIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
