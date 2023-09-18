import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBrandLightLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBrandLightLogoWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateBrandLightLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBrandLightLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBrandLightLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
